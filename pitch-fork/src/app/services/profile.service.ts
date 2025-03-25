import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = environment.apiUrl; // Backend API base URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token || ''}`, // Fallback to empty string if no token
    });
  }

  getProfile(): Observable<any> {
    const headers = this.getAuthHeaders();
    const token = this.authService.getToken();
    if (!token) {
      console.error('No token available for getProfile');
      return throwError(() => new Error('No token available'));
    }
    return this.http.get(`${this.apiUrl}/profile`, { headers }).pipe(
      catchError((error) => {
        console.error('Get profile error:', error);
        return throwError(() => error);
      })
    );
  }

  updateProfile(data: FormData): Observable<any> {
    const headers = this.getAuthHeaders();
    const token = this.authService.getToken();
    if (!token) {
      console.error('No token available for updateProfile');
      return throwError(() => new Error('No token available'));
    }
    return this.http.put(`${this.apiUrl}/profile`, data, { headers }).pipe(
      catchError((error) => {
        console.error('Update profile error:', error);
        return throwError(() => error);
      })
    );
  }

  getProfileById(userId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    const token = this.authService.getToken();
    if (!token) {
      console.error(`No token available for getProfileById(${userId})`);
      return throwError(() => new Error('No token available'));
    }
    const baseUrl = environment.baseUrl;
    return this.http.get(`${this.apiUrl}/profile/${userId}`, { headers }).pipe(
      map((profile: any) => {
        if (profile) {
          profile.profile_picture = profile.profile_picture
            ? `${baseUrl}${profile.profile_picture}`
            : '';
          profile.banner = profile.banner ? `${baseUrl}${profile.banner}` : '';
        }
        return profile;
      }),
      catchError((error) => {
        console.error(`Error fetching profile for user ${userId}:`, error);
        return throwError(() => error);
      })
    );
  }
}
