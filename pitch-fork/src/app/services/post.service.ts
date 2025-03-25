import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root', // ✅ This makes the service globally available
})
export class PostService {
  private apiUrl = environment.apiUrl;
  private postUrl = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) {}

  createPost(post: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Send the token in the header
    });

    return this.http.post(this.postUrl, post, { headers });
  }
}
