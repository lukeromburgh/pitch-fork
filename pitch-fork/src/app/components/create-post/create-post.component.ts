import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.

@Component({
  selector: 'app-create-post',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule and CommonModule
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  postForm: FormGroup; // Ensure postForm is explicitly typed

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const newPost = this.postForm.value;
      this.postService.createPost(newPost).subscribe(
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
