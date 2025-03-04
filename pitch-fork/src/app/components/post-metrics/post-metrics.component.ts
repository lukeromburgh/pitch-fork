import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { AuthService } from '../../services/auth.service'; // Adjust path as needed

Chart.register(...registerables);

@Component({
  selector: 'app-post-metrics',
  standalone: true,
  imports: [HttpClientModule],
  template: `<canvas id="postsGraph"></canvas>`,
  styleUrls: ['./post-metrics.component.css'],
})
export class PostMetricsComponent implements OnInit {
  metrics: any; // Will hold the metrics data

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    // Replace the URL with your backend endpoint
    this.http
      .get('http://localhost:5000/api/admin/metrics', { headers })
      .subscribe(
        (data: any) => {
          this.metrics = data;
          this.renderGraph();
        },
        (error) => {
          console.error('Error fetching metrics:', error);
        }
      );
  }

  renderGraph(): void {
    const ctx = document.getElementById('postsGraph') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.metrics.chart_data.map((d: any) => d.date),
        datasets: [
          {
            label: 'Posts per Day',
            data: this.metrics.chart_data.map((d: any) => d.count),
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            fill: false,
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
