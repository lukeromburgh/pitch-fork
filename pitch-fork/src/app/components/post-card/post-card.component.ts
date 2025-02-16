import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  standalone: true,
})
export class PostCardComponent {
  @Input() post: any; // Receives post data dynamically

  constructor(private router: Router, private authService: AuthService) {}

  likePost() {
    if (!this.post || !this.post.id) {
      // Ensure post exists
      console.error('Post data is missing or undefined');
      return;
    }

    this.authService.likePost(this.post.id).subscribe(
      (response) => {
        this.post.likes = response.likes; // Update likes count in UI
      },
      (error) => {
        console.error('Error liking post', error);
      }
    );
  }

  viewPost() {
    this.router.navigate(['/post', this.post.id]); // Navigate to post page
  }
}
