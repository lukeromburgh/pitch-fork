// comments.component.ts
import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProfileHoverCardComponent } from '../profile-hover-card/profile-hover-card.component';

interface Comment {
  id: number;
  content: string;
  date_posted: string;
  user_id: number;
  username: string;
  post_id: number;
}

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePipe,
    ProfileHoverCardComponent,
  ],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  @Input() userId!: number;
  showHoverCard = false;

  comments: Comment[] = [];
  commentForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() {
    this.commentForm = new FormGroup({
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit(): void {
    // Get the token from local storage
    const token = localStorage.getItem('token');
    if (token) {
      this.loadComments(token);
    } else {
      this.errorMessage = 'Authentication required to view comments';
    }
  }

  loadComments(token: string): void {
    this.getCommentsByPostId(this.postId, token).subscribe({
      next: (response) => {
        this.comments = response;
      },
      error: (error) => {
        console.error('Error loading comments:', error);
        this.errorMessage = 'Could not load comments. Please try again later.';
      },
    });
  }

  submitComment(): void {
    if (this.commentForm.invalid) {
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      this.errorMessage = 'Authentication required to post comments';
      return;
    }

    this.isSubmitting = true;

    const comment = {
      content: this.commentForm.get('content')?.value,
      post_id: this.postId,
    };

    this.createComment(comment, token).subscribe({
      next: (response) => {
        this.comments.unshift(response);
        this.commentForm.reset();
        this.isSubmitting = false;
        this.errorMessage = '';
      },
      error: (error) => {
        console.error('Error posting comment:', error);
        this.errorMessage = 'Could not post comment. Please try again later.';
        this.isSubmitting = false;
      },
    });
  }

  createComment(comment: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(`${this.apiUrl}/comment`, comment, { headers });
  }

  getCommentsByPostId(postId: number, token: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any[]>(`${this.apiUrl}/comment?post_id=${postId}`, {
      headers,
    });
  }
}
