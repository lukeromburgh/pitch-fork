import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profilePicturePreview: string | ArrayBuffer | null = null;

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
    });

    // Fetch the user's existing profile data
    this.authService.getProfile().subscribe(
      (data) => {
        this.profileForm.patchValue({
          username: data.username,
          email: data.email,
          bio: data.bio,
        });
      },
      (error) => {
        console.error('Error fetching profile data', error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicturePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const profileData = this.profileForm.value;
      this.authService.updateProfile(profileData).subscribe(
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
