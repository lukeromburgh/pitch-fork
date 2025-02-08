import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  postForm: FormGroup; // Form object

  constructor(private fb: FormBuilder, private postService: PostService) {
    // Define the form structure
    this.postForm = this.fb.group({
      title: ['', Validators.required], // Title is required
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postService.createPost(this.postForm.value).subscribe(
        (response) => {
          console.log('Post created:', response);
          alert('Post successfully created!');
          this.postForm.reset(); // Clear form after submission
        },
        (error) => {
          console.error('Error creating post:', error);
          alert('Failed to create post');
        }
      );
    }
  }
}
