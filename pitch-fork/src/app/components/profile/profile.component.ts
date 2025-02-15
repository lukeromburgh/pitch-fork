import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  loading = true;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // add other fields as needed (e.g., bio, profilePicture, etc.)
    });
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (profile) => {
        // Populate the form with the user's profile details
        this.profileForm.patchValue({
          username: profile.username,
          email: profile.email,
        });
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching profile:', err);
        this.errorMessage = 'Unable to fetch profile. Please try again later.';
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.authService.updateProfile(this.profileForm.value).subscribe({
        next: (response) => {
          console.log('Profile updated successfully', response);
          // Optionally navigate somewhere or show a success message
        },
        error: (err) => {
          console.error('Error updating profile:', err);
          this.errorMessage = 'Profile update failed.';
        },
      });
    }
  }
}
