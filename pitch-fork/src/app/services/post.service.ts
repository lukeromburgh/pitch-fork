import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // ✅ This makes the service globally available
})
export class PostService {
  private apiUrl = 'http://127.0.0.1:5000/api/posts';

  constructor(private http: HttpClient) {}

  // Inside your Angular PostService
  getPosts(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/posts');
  }

  createPost(postData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/api/posts', postData);
  }
}
