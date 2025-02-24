import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private authStatus = new BehaviorSubject<boolean>(false);
  private baseUrl = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) {}

  signup(userData: any) {
    return this.http.post('http://127.0.0.1:5000/sign-up', userData);
  }

  login(credentials: any) {
    return this.http
      .post<{ token: string }>('http://127.0.0.1:5000/login', credentials)
      .pipe(
        tap((response) => {
          if (response.token) {
            localStorage.setItem('token', response.token); // Store token
          }
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('user_id');
    this.authStatus.next(false);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getUserId() {
    return localStorage.getItem('user_id');
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getPostById(postId: number): Observable<any> {
    console.log('Get post by id: ${postId}');
    const token = this.getToken();
    console.log('token: ', token);
    if (!token) {
      console.error('No auth token found!');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    console.log('Authorization header:', `Bearer ${token}`);

    return this.http.get<any>(`${this.baseUrl}/api/post/${postId}`, {
      headers,
    });
  }

  getPosts(): Observable<any> {
    console.log('Get posts!!!!');
    const token = this.getToken();
    console.log('token: ', token);
    if (!token) {
      console.error('No auth token found!');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    console.log('Authorization header:', `Bearer ${token}`);
    return this.http.get('http://127.0.0.1:5000/api/posts', { headers });
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(`${this.baseUrl}/api/profile`, { headers });
  }

  updateProfile(profileData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      // Remove Content-Type as it will be automatically set for FormData
      Authorization: `Bearer ${token}`,
    });

    // Create FormData object
    const formData = new FormData();

    // Append the form fields to FormData
    Object.keys(profileData).forEach((key) => {
      // Only append if the value exists and isn't null/undefined
      if (profileData[key] != null) {
        formData.append(key, profileData[key]);
      }
    });

    return this.http.put(`${this.baseUrl}/api/profile`, formData, {
      headers,
    });
  }

  likePost(postId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(
      `http://127.0.0.1:5000/api/like/${postId}`,
      {},
      { headers }
    );
  }
}
