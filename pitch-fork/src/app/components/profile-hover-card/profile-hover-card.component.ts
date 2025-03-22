import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../../services/profile.service'; // Adjust path as needed

@Component({
  selector: 'app-profile-hover-card',
  templateUrl: './profile-hover-card.component.html',
  styleUrls: ['./profile-hover-card.component.css'],
  standalone: true,
})
export class ProfileHoverCardComponent implements OnInit {
  @Input() userId!: number; // The ID of the user to fetch the profile for
  profile$!: Observable<any>; // Observable to hold the profile data

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // Fetch the profile data when the component initializes
    this.profile$ = this.profileService.getProfileById(this.userId);
  }
}
