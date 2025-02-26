import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private tokenKey = 'token';
  private apiUrl = `${environment.apiUrl}`; // Using the environment variable
  private token = localStorage.getItem('token');
  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
  }

  constructor(private http: HttpClient) {}

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
    return this.http.post(`${this.apiUrl}/admin/users/${userId}/make-admin`, {
      headers: this.getAuthHeaders(),
    });
  }
}
