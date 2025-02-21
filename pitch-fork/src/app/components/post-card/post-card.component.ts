import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
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
export class PostCardComponent implements OnInit {
  @Input() post: any; // Receives post data dynamically
  @Input() likes: any;
  trimmedCategories: string[] = [];

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.categorySplit();
  }

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

  categorySplit() {
    const splitCategory = this.post.category.split(',');
    this.trimmedCategories = splitCategory.map((category: string) =>
      category.trim()
    );

    console.log(this.trimmedCategories.length);
    console.log('Split category:', this.trimmedCategories);
    return this.trimmedCategories;
  }

  viewPost() {
    this.router.navigate(['/post', this.post.id]); // Navigate to post page
  }
}
