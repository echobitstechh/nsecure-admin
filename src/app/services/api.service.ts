import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://nsecure-backend.onrender.com/api/v1';
  // private baseUrl: string = 'http://localhost:3000/api/v1/admin';

  //test admin credentials: email = superadmin@nsecure.com  || password = @nsecureSuperAdmin1234!

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/admin/signin`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http
      .post<any>(url, body, { headers })
      .pipe(catchError(this.handleError<any>('login')));
  }

  refreshToken(): Observable<any> {
    const url = `${this.baseUrl}/admin/refresh-token`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { token: this.authService.getRefreshToken() };

    return this.http
      .post<any>(url, body, { headers })
      .pipe(catchError(this.handleError<any>('refreshToken')));
  }

  getAdmins(): Observable<any> {
    const url = `${this.baseUrl}/admin/admins`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getAdmins')));
  }
  getTaxDashboardData(): Observable<any> {
    const url = `${this.baseUrl}/tax/gettaxdatafordashboard`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getTaxDashboardData')));
  }
  getDataforDashboard(): Observable<any> {
    const url = `${this.baseUrl}/user/getuserdatafordashboard`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getEnumerators')));
  }
  getTransportWorkers(): Observable<any> {
    const url = `${this.baseUrl}/admin/getalldrivers`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getTransportWorkers')));
  }
  getEnumerators(): Observable<any> {
    const url = `${this.baseUrl}/enumerator/getallenumerators`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getEnumerators')));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => error);
    };
  }
}
