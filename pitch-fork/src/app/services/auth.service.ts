import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private authStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  signup(userData: any) {
    return this.http.post('http://127.0.0.1:5000/signup', userData);
  }

  login(credentials: any) {
    return this.http.post<{ token: string; user_id: number }>(
      'http://127.0.0.1:5000/login',
      credentials
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
}
