import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private authStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  signup(userData: any) {
    return this.http.post('http://127.0.0.1:5000/sign-up', userData);
  }

  login(credentials: any) {
    return this.http
      .post<{ access_token: string }>(
        'http://127.0.0.1:5000/login',
        credentials
      )
      .pipe(
        tap((response) => {
          if (response.access_token) {
            localStorage.setItem('token', response.access_token); // Store token
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

  getPosts() {
    const token = this.getToken();
    if (!token) {
      console.error('No auth token found!');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    console.log('Authorization header:', `Bearer ${token}`);
    return this.http.get('http://127.0.0.1:5000/api/posts', { headers });
  }
}
