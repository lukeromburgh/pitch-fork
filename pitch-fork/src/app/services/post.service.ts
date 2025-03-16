import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // ✅ This makes the service globally available
})
export class PostService {
  private apiUrl = 'http://127.0.0.1:5001/api';
  private postUrl = 'http://127.0.0.1:5001/api/posts';

  constructor(private http: HttpClient) {}

  createPost(post: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Send the token in the header
    });

    return this.http.post(this.postUrl, post, { headers });
  }
}
