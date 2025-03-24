import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, NgIf],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: any = {}; // Object to store user profile data

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the user profile from API or service
    this.profileService.getProfile().subscribe(
      (data) => {
        console.log('User profile:', data);
        this.userProfile = data;
      },
      (error) => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  // Navigate to the edit profile page
  goToEditProfile(): void {
    this.router.navigate(['/edit-profile']);
  }
}
