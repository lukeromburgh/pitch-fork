import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private tokenKey = 'token';
  private apiUrl = `${environment.apiUrl}`; // Using the environment variable

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null; // Return null on server-side
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token || ''}`, // Fallback to empty string if no token
    });
  }

  getDashboardData(): Observable<any> {
    console.log('Get dashboard data');
    return this.http.get(`${this.apiUrl}/admin/dashboard`, {
      headers: this.getAuthHeaders(),
    });
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/users`, {
      headers: this.getAuthHeaders(),
    });
  }

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/posts`, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/users/${userId}`, {
      headers: this.getAuthHeaders(),
    });
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/posts/${postId}`, {
      headers: this.getAuthHeaders(),
    });
  }

  makeUserAdmin(userId: number): Observable<any> {
    // Note: POST requests typically send a body, even if empty, not headers as the second arg
    return this.http.post(
      `${this.apiUrl}/admin/users/${userId}/make-admin`,
      {}, // Empty body
      { headers: this.getAuthHeaders() } // Options object with headers
    );
  }
}
