import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:5001/api/profile'; // Adjust your backend URL

  constructor(private http: HttpClient) {}

  updateProfile(data: FormData): Observable<any> {
    return this.http.put(this.apiUrl, data);
  }
}
