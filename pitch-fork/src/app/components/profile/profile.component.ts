import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  userPosts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.getUserPosts();
  }

  getUserProfile() {
    const token = localStorage.getItem('token');
    this.http
      .get('http://127.0.0.1:5000/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe((response) => {
        this.user = response;
      });
  }

  getUserPosts() {
    const token = localStorage.getItem('token');
    this.http
      .get('http://127.0.0.1:5000/api/posts', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe((response: any) => {
        this.userPosts = response;
      });
  }

  editProfile() {
    console.log('Open edit modal'); // Implement modal for editing
  }
}
