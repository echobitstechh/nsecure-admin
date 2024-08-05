import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   adminId = localStorage.getItem('adminId')
  private apiUrl: string = `https://nsecure-backend.onrender.com/api/v1/admin/me/${this.adminId}`;

  constructor(private http: HttpClient) {}

  createUser(profileData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, profileData);
  }
}
