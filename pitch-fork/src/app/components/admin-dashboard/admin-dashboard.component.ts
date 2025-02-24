import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

Chart.register(...registerables);

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  posts: any[] = [];
  metrics: any = {
    total_users: 0,
    total_posts: 0,
    total_likes: 0,
    users_per_day: [],
  };
  private apiUrl = 'http://localhost:5000/api/admin';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const token = localStorage.getItem('token'); // Assuming token is stored here
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Fetch data
    this.http
      .get(`${this.apiUrl}/users`, { headers, withCredentials: false })
      .subscribe((data: any) => (this.users = data));
    this.http
      .get(`${this.apiUrl}/posts`, { headers })
      .subscribe((data: any) => (this.posts = data));
    this.http
      .get(`${this.apiUrl}/metrics`, { headers })
      .subscribe((data: any) => {
        this.metrics = data;
        this.renderGraph();
      });
  }

  deleteUser(userId: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http
      .delete(`${this.apiUrl}/users/${userId}`, { headers })
      .subscribe(() => {
        this.users = this.users.filter((user) => user.id !== userId);
      });
  }

  deletePost(postId: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http
      .delete(`${this.apiUrl}/posts/${postId}`, { headers })
      .subscribe(() => {
        this.posts = this.posts.filter((post) => post.id !== postId);
      });
  }

  renderGraph() {
    const ctx = document.getElementById('userGraph') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.metrics.users_per_day.map((d: any) => d.date),
        datasets: [
          {
            label: 'Users per Day',
            data: this.metrics.users_per_day.map((d: any) => d.count),
            borderColor: '#007bff',
            fill: false,
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    });
  }
}
