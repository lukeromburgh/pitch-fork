import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  standalone: true,
})
export class PostCardComponent {
  @Input() post: any; // Receives post data dynamically

  constructor(private router: Router) {}

  viewPost() {
    this.router.navigate(['/post', this.post.id]); // Navigate to post page
  }
}
