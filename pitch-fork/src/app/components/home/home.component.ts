import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    PostCardComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
}) // implements OnInit
export class HomeComponent {
  posts: any[] = []; // Store fetched posts

  constructor(public router: Router, private authService: AuthService) {}

  // ngOnInit() {
  //   this.fetchPosts(); // Fetch posts on component load
  // }

  // fetchPosts() {
  //   this.authService.getPosts().subscribe({
  //     next: (data) => {
  //       this.posts = data;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching posts:', err);
  //     },
  //   });
  // }

  Home() {
    this.router.navigate(['/']);
  }
}
