import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
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

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
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
