import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.
import { AuthService } from '../../services/auth.service'; // Import AuthService
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-create-post',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule and CommonModule
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  postForm: FormGroup; // Ensure postForm is explicitly typed

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private authService: AuthService, // Inject AuthService to check authentication
    private router: Router // Inject Router to redirect if not authenticated
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      // Ensure user is authenticated before submitting post
      const token = this.authService.getToken(); // Get the JWT token

      if (!token) {
        // If no token, user is not authenticated
        console.log('User is not authenticated');
        this.router.navigate(['/login']); // Redirect to login page
        return;
      }

      const newPost = this.postForm.value;
      this.postService.createPost(newPost, token).subscribe(
        (response) => {
          console.log('Post created successfully!', response);
        },
        (error) => {
          console.error('Error creating post:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
