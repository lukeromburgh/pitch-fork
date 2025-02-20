import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service'; // New profile service
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: any = {}; // Store user details
  profilePicturePreview: string | ArrayBuffer | null = null;
  bannerPreview: string | ArrayBuffer | null = null;
  profilePictureFile: File | null = null;
  bannerFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      username: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      bio: [''],
      old_password: [''],
      new_password: [''],
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.getProfile().subscribe(
      (data) => {
        this.user = data;
        this.profileForm.patchValue({
          username: this.user.username,
          email: this.user.email,
          bio: this.user.bio || '',
        });

        if (this.user.profile_picture) {
          this.profilePicturePreview = this.user.profile_picture;
        }
        if (this.user.banner) {
          this.bannerPreview = this.user.banner;
        }
      },
      (error) => {
        console.error('Error loading profile:', error);
      }
    );
  }

  onProfilePictureChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePictureFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result !== undefined) {
          this.profilePicturePreview = e.target.result as string | ArrayBuffer;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onBannerChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.bannerFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result !== undefined) {
          this.bannerPreview = e.target.result as string | ArrayBuffer;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('bio', this.profileForm.value.bio);

    if (
      this.profileForm.value.old_password &&
      this.profileForm.value.new_password
    ) {
      formData.append('old_password', this.profileForm.value.old_password);
      formData.append('new_password', this.profileForm.value.new_password);
    }

    if (this.profilePictureFile) {
      formData.append('profile_picture', this.profilePictureFile);
    }

    if (this.bannerFile) {
      formData.append('banner', this.bannerFile);
    }

    this.profileService.updateProfile(formData).subscribe(
      (response) => {
        console.log('Profile updated successfully!', response);
        this.loadUserProfile(); // Refresh profile data
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
