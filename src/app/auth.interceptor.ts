import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, switchMap, throwError, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !req.url.endsWith('/login') &&
      !req.url.endsWith('/forget-password') &&
      !req.url.endsWith('/create-password') &&
      !req.url.endsWith('/refresh-token')
    ) {
      const auth = this.authService.getJwtToken();
      if (auth) {
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${auth}`),
        });
      }
    } else if (req.url.endsWith('/refresh-token')) {
      const authRefresh = this.authService.getRefreshToken() ?? '';
      req = req.clone({
        headers: req.headers.set('Refresh-Token', authRefresh),
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.apiService.refreshToken().pipe(
            switchMap((response) => {
              this.authService.storeJwtToken(response.accessToken);
              req = req.clone({
                headers: req.headers.set(
                  'Authorization',
                  `Bearer ${response.accessToken}`
                ),
              });
              return next.handle(req);
            }),
            catchError((refreshError) => {
              this.authService.logOut();
              return throwError(() => refreshError);
            })
          );
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
