import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:5001/api'; // Adjust based on your backend

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfile(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return throwError(() => new Error('No token available'));
    }
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(`${this.apiUrl}/profile`, { headers }).pipe(
      catchError((error) => {
        console.error('Get profile error:', error);
        return throwError(() => error);
      })
    );
  }

  updateProfile(data: FormData): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      console.error('No token available');
      return throwError(() => new Error('No token available'));
    }
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.put(`${this.apiUrl}/profile`, data, { headers }).pipe(
      catchError((error) => {
        console.error('Update profile error:', error);
        return throwError(() => error);
      })
    );
  }
}
