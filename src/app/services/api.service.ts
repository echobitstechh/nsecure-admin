import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
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

  //   "auditLogAccess": true,
  //   "analyticsAccess": true,
  //   "reportAccess": true,
  //   "adminUsersAccess": true,
  //   "eServicesAccess": true

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

  createAdmin(
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    phoneNumber: string,
    dashboardAccess: boolean,
    enumeratorAccess: boolean,
    taxpayersAccess: boolean,
    auditLogAccess: boolean,
    analyticsAccess: boolean,
    reportAccess: boolean,
    adminUsersAccess: boolean,
    eServicesAccess: boolean,
    image?: string
  ): Observable<any> {
    const url = `${this.baseUrl}/admin/create`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      email,
      firstName,
      lastName,
      role,
      phoneNumber,
      dashboardAccess,
      enumeratorAccess,
      taxpayersAccess,
      auditLogAccess,
      analyticsAccess,
      reportAccess,
      adminUsersAccess,
      eServicesAccess,
      image,
    };

    return this.http
      .post<any>(url, body, { headers })
      .pipe(catchError(this.handleError<any>('createAdmin')));
  }

  updateAdmin(
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    phoneNumber: string,
    dashboardAccess: boolean,
    enumeratorAccess: boolean,
    taxpayersAccess: boolean,
    auditLogAccess: boolean,
    analyticsAccess: boolean,
    reportAccess: boolean,
    adminUsersAccess: boolean,
    eServicesAccess: boolean,
    adminId: string,
    image?: string
  ): Observable<any> {
    const url = `${this.baseUrl}/admin/admins/${adminId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      email,
      firstName,
      lastName,
      role,
      phoneNumber,
      dashboardAccess,
      enumeratorAccess,
      taxpayersAccess,
      auditLogAccess,
      analyticsAccess,
      reportAccess,
      adminUsersAccess,
      eServicesAccess,
      image,
    };

    return this.http
      .patch<any>(url, body, { headers })
      .pipe(catchError(this.handleError<any>('updateAdmin')));
  }

  deleteAdmin(adminId: string): Observable<any> {
    const url = `${this.baseUrl}/admin/admins/${adminId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .delete<any>(url, { headers })
      .pipe(catchError(this.handleError<any>('deleteAdmin')));
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

  getAnAdmin(adminId: string): Observable<any> {
    const url = `${this.baseUrl}/admin/me/${adminId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getAnAdmin')));
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

  getOneTransportWorker(driverId: string): Observable<any> {
    const url = `${this.baseUrl}/admin/getonedriver/${driverId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getOneTransportWorker')));
  }

  updateTransportWorker(driverId: string): Observable<any> {
    const url = `${this.baseUrl}/admin/updatedriver/${driverId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {};

    return this.http
      .patch<any>(url, body, { headers })
      .pipe(catchError(this.handleError<any>('updateTransportWorker')));
  }

  deleteTransportWorker(driverId: string): Observable<any> {
    const url = `${this.baseUrl}/admin/deletedriver/${driverId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .delete<any>(url, { headers })
      .pipe(catchError(this.handleError<any>('deleteTransportWorker')));
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

  createAgent(Data: any): Observable<any> {
    const url = `${this.baseUrl}/agent/create`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      Data,
    };

    return this.http
      .post<any>(url, body, { headers })
      .pipe(catchError(this.handleError<any>('createAgent')));
  }

  updateAgent(
    Data:any,
    agentId: string
  ): Observable<any> {
    const url = `${this.baseUrl}/agent/agents/${agentId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      Data
    };

    return this.http
      .put<any>(url, body, { headers })
      .pipe(catchError(this.handleError<any>('updateAgent')));
  }

  deleteAgent(agentId: string): Observable<any> {
    const url = `${this.baseUrl}/agent/agents/${agentId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .delete<any>(url, { headers })
      .pipe(catchError(this.handleError<any>('deleteAgent')));
  }

  getAgents(role?: string): Observable<any> {
    const url = `${this.baseUrl}/agent/agents`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    // Create HttpParams object
    let params = new HttpParams();
    if (role) {
      params = params.set('role', role);
    }

    return this.http
      .get<any>(url, { headers, params })
      .pipe(catchError(this.handleError('getAssessmentByStatus')));
  }

  getAnAgent(agentId: string): Observable<any> {
    const url = `${this.baseUrl}/agent/agents/${agentId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getAnAgent')));
  }

  createPark(Data: any): Observable<any> {
    const url = `${this.baseUrl}/park/create`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .post<any>(url, Data, { headers })
      .pipe(catchError(this.handleError<any>('createTax')));
  }

  getParks(): Observable<any> {
    const url = `${this.baseUrl}/park/parkDashboard`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError(this.handleError('getParks')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => error);
    };
  }
}
