import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-full-screen-post',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './full-screen-post.component.html',
  styleUrl: './full-screen-post.component.css',
})
export class FullScreenPostComponent implements OnInit {
  @Input() post: any; // Receives post data dynamically
  @Input() likes: any;
  postId: number | null = null;
  trimmedCategories: string[] = [];
  isLiked = false;
  showParticles = false;
  particles = Array(8);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private postService: PostService
  ) {}

  handleLike() {
    if (this.isLiked) return; // Prevent multiple clicks before API response

    this.isLiked = true;
    this.showParticles = true;

    setTimeout(() => {
      this.showParticles = false;
    }, 1000);

    this.likePost(); // Call backend API
  }

  ngOnInit(): void {
    this.categorySplit();

    console.log('Post ID:', this.postId);
    console.log(this.route);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(params);
      if (id) {
        this.postId = +id; // Convert to number
        this.fetchPostData(this.postId);
      }
    });
  }

  fetchPostData(id: number) {
    if (!this.authService || !this.authService.getPostById) {
      console.error('AuthService or getPostById method is undefined!');
      return;
    }

    this.authService.getPostById(id).subscribe(
      (response) => {
        console.log('Post fetched successfully:', response);
        this.post = response;
      },
      (error) => {
        console.error('Error fetching post:', error);
      }
    );
  }

  likePost() {
    if (!this.post || !this.post.id) {
      console.error('Post data is missing or undefined');
      return;
    }

    this.authService.likePost(this.post.id).subscribe(
      (response) => {
        if (response.likes !== undefined) {
          this.post.likes = response.likes; // ✅ Update likes count
        }
      },
      (error) => {
        console.error('Error liking post', error);
        this.isLiked = false; // ✅ Reset UI state if error occurs
      }
    );
  }

  addComment(): void {
    if (!this.post || !this.post.id) {
      console.error('Post data is missing or undefined');
      return;
    }

    const token = this.authService.getToken();

    this.postService.createComment(this.post.id, token!).subscribe(
      (response) => {
        if (response.comments !== undefined) {
          this.post.comments = response.comments; // ✅ Update comments count
        }
      },
      (error) => {
        console.error('Error adding comment', error);
      }
    );
  }

  // Split categories into an array so we can ngFor to add new css to each item (Using ngClass)
  // https://www.freecodecamp.org/news/angular-ngclass-example/
  // Might cap tags at 5 when creating post? Worried they take up too much space otherwise
  categorySplit() {
    if (!this.post || !this.post.category) {
      console.warn('Post category is missing or undefined.');
      return;
    }

    this.trimmedCategories = this.post.category
      .split(',')
      .map((category: string) => category.trim());

    console.log('Split category:', this.trimmedCategories);
  }

  viewPost() {
    if (!this.post || !this.post.id) {
      console.error('Cannot navigate: post ID is missing.');
      return;
    }
    this.router.navigate(['/post', this.post.id]);
  }

  closePost() {
    this.router.navigate(['/posts']);
  }
}
