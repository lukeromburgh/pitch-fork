import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profilePictureFile: File | null = null;
  bannerFile: File | null = null;
  profilePicturePreview: string | ArrayBuffer | null = null;
  bannerPreview: string | ArrayBuffer | null = null;
  selectedColor: string = '#2C3539';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with user profile data
    this.profileForm = this.fb.group({
      username: [{ value: '', disabled: true }], // Disabled fields
      email: [{ value: '', disabled: true }],
      bio: ['', [Validators.maxLength(200)]],
      password: ['', [Validators.minLength(6)]],
      bannerType: ['image'], // Add this
      bannerColor: ['#2C3539'],
    });

    // Fetch the user's existing profile data
    this.authService.getProfile().subscribe(
      (data) => {
        this.profileForm.patchValue({
          username: data.username,
          email: data.email,
          bio: data.bio,
          bannerType: data.bannerType || 'image',
          bannerColor: data.bannerColor || '#2C3539',
        });
        this.selectedColor = data.bannerColor || '#2C3539';
        this.bannerPreview = data.bannerUrl || null;
      },
      (error) => {
        console.error('Error fetching profile data', error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.profilePictureFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicturePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onBannerFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.bannerFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.bannerPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onColorChange(event: any): void {
    this.selectedColor = event.target.value;
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formData = new FormData();

      // Add text fields
      if (this.profileForm.get('bio')?.value) {
        formData.append('bio', this.profileForm.get('bio')?.value);
      }

      if (this.profileForm.get('password')?.value) {
        formData.append(
          'new_password',
          this.profileForm.get('password')?.value
        );
      }

      // Add banner type and color if using solid color
      if (this.profileForm.get('bannerType')?.value === 'color') {
        formData.append('banner_type', 'color');
        formData.append(
          'banner_color',
          this.profileForm.get('bannerColor')?.value
        );
      }

      // Add files if they exist
      if (this.profilePictureFile) {
        formData.append('profile_picture', this.profilePictureFile);
      }

      if (
        this.bannerFile &&
        this.profileForm.get('bannerType')?.value === 'image'
      ) {
        formData.append('banner', this.bannerFile);
      }

      this.authService.updateProfile(formData).subscribe(
        (response) => {
          console.log('Profile updated successfully', response);
          this.router.navigate(['/profile']);
        },
        (error) => {
          console.error('Error updating profile', error);
        }
      );
    }
  }
}
