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
  private apiUrl = environment.apiUrl; // Adjust based on your backend

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfile(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return throwError(() => new Error('No token available'));
    }
    const baseUrl = environment.baseUrl;
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

  // Fetch a user's profile by ID
  getProfileById(userId: number): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return throwError(() => new Error('No token available'));
    }
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const baseUrl = environment.baseUrl; // Adjust to your Flask server URL
    return this.http.get(`${this.apiUrl}/profile/${userId}`, { headers }).pipe(
      map((profile: any) => {
        profile.profile_picture = profile.profile_picture
          ? `${baseUrl}${profile.profile_picture}`
          : '';
        profile.banner = profile.banner ? `${baseUrl}${profile.banner}` : '';
        return profile;
      }),
      catchError((error) => {
        console.error(`Error fetching profile for user ${userId}:`, error);
        return throwError(() => error);
      })
    );
  }
}
