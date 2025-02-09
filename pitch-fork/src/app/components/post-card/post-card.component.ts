import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  standalone: true,
})
export class PostCardComponent {
  @Input() post: any; // Receives post data dynamically

  constructor(private router: Router) {}

  viewPost() {
    this.router.navigate(['/post', this.post.id]); // Navigate to post page
  }
}
