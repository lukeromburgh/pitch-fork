import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  posts: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getPosts().subscribe(
      (data) => {
        console.log('Posts received:', data); // Debugging: See the fetched posts
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
