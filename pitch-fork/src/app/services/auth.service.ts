import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private authStatus = new BehaviorSubject<boolean>(false);
  private apiUrl = `${environment.apiUrl}`; // Using the environment variable
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  signup(userData: any) {
    return this.http.post(`${this.baseUrl}/sign-up`, userData);
  }

  login(credentials: any): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          if (response.token && isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', response.token); // Store token only in browser
            this.authStatus.next(true); // Update auth status
          }
        })
      );
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem('user_id');
    }
    this.authStatus.next(false);
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null; // Return null on server-side
  }

  getUserId(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('user_id');
    }
    return null; // Return null on server-side
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getPostById(postId: number): Observable<any> {
    console.log(`Get post by id: ${postId}`);
    const token = this.getToken();
    console.log('token: ', token);
    if (!token) {
      console.error('No auth token found!');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token || ''}`, // Fallback to empty string if no token
    });

    console.log('Authorization header:', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/post/${postId}`, { headers });
  }

  getPosts(): Observable<any> {
    console.log('Get posts!!!!');
    const token = this.getToken();
    console.log('token: ', token);
    if (!token) {
      console.error('No auth token found!');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token || ''}`, // Fallback to empty string if no token
    });

    console.log('Authorization header:', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/posts`, { headers });
  }

  likePost(postId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token || ''}`, // Fallback to empty string if no token
    });

    return this.http.post(`${this.apiUrl}/like/${postId}`, {}, { headers });
  }
}
