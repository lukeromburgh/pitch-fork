import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  dashboardData: any = {
    counts: { users: 0, posts: 0, likes: 0 },
    chart_data: [],
  };
  users: any[] = [];
  posts: any[] = [];
  postsChart: any;

  loading = {
    dashboard: true,
    users: true,
    posts: true,
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadUsers();
    this.loadPosts();
  }

  loadDashboardData(): void {
    this.loading.dashboard = true;
    this.adminService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading.dashboard = false;
        this.initChart();
      },
      error: (error) => {
        console.error('Error loading dashboard data', error);
        this.loading.dashboard = false;
      },
    });
  }

  loadUsers(): void {
    this.loading.users = true;
    this.adminService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading.users = false;
      },
      error: (error) => {
        console.error('Error loading users', error);
        this.loading.users = false;
      },
    });
  }

  loadPosts(): void {
    this.loading.posts = true;
    this.adminService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loading.posts = false;
      },
      error: (error) => {
        console.error('Error loading posts', error);
        this.loading.posts = false;
      },
    });
  }

  deleteUser(userId: number): void {
    if (
      confirm(
        'Are you sure you want to delete this user? This will delete all their posts and cannot be undone.'
      )
    ) {
      this.adminService.deleteUser(userId).subscribe({
        next: () => {
          this.users = this.users.filter((user) => user.id !== userId);
          this.loadDashboardData(); // Refresh counts
        },
        error: (error) => console.error('Error deleting user', error),
      });
    }
  }

  deletePost(postId: number): void {
    if (
      confirm(
        'Are you sure you want to delete this post? This cannot be undone.'
      )
    ) {
      this.adminService.deletePost(postId).subscribe({
        next: () => {
          this.posts = this.posts.filter((post) => post.id !== postId);
          this.loadDashboardData(); // Refresh counts
        },
        error: (error) => console.error('Error deleting post', error),
      });
    }
  }

  makeAdmin(userId: number): void {
    if (
      confirm(
        'Make this user an admin? They will have full access to this dashboard.'
      )
    ) {
      this.adminService.makeUserAdmin(userId).subscribe({
        next: () => {
          const user = this.users.find((u) => u.id === userId);
          if (user) {
            user.is_admin = true;
          }
        },
        error: (error) => console.error('Error making user admin', error),
      });
    }
  }

  initChart(): void {
    if (this.postsChart) {
      this.postsChart.destroy();
    }

    const ctx = document.getElementById('postsChart') as HTMLCanvasElement;
    console.error('Canvas element not found');
    if (!ctx) return;

    if (
      !this.dashboardData.chart_data ||
      this.dashboardData.chart_data.length === 0
    ) {
      console.error('No chart data available');
      return;
    }

    const dates = this.dashboardData.chart_data.map((item: any) => item.date);
    const counts = this.dashboardData.chart_data.map((item: any) => item.count);

    this.postsChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Posts in the Last 30 Days',
            data: counts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Posts',
            },
            ticks: {
              precision: 0,
            },
          },
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
        },
      },
    });
  }
}
