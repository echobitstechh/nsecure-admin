// import { Injectable } from '@angular/core';
// import {
//   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS
// } from '@angular/common/http';
// import { catchError, switchMap, throwError, Observable } from 'rxjs';
// import { AuthService } from './services/auth.service';
// import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (!req.url.endsWith('/auth/login') && !req.url.endsWith('/auth/resetpassword') && !req.url.endsWith('/auth/verifycode')
//       && !req.url.endsWith('/refresh-token')) {
//       const auth = this.authService.getJwtToken();
//       console.log('got into the reset check', req.url);
//       if (auth) {
//         req = req.clone({
//           headers: req.headers.set('Authorization', `Bearer ${auth}`),
//         });
//       }
//     } else if (req.url.endsWith('/refresh-token')) {
//       const authRefresh = this.authService.getRefreshToken() ?? '';
//       req = req.clone({
//         headers: req.headers.set('Refresh-Token', authRefresh),
//       });
//     }
//
//     return next.handle(req).pipe(
//       catchError((error: HttpErrorResponse) => {
//         // If it's a 401 error, we try to refresh the token
//         if (error.status === 401) {
//           console.log("got a 401 calling refresh token")
//           return this.authService.refreshToken().pipe(
//             switchMap((response) => {
//               // Clone the request with the new token
//               req = req.clone({
//                 headers: req.headers.set('Authorization', `Bearer ${response.accessToken}`),
//               });
//               // Retry the request with the new token
//               return next.handle(req);
//             }),
//             catchError((refreshError) => {
//               // Handle refresh token errors (e.g., logout the user, redirect to login)
//               return throwError(() => refreshError);
//             })
//           );
//         } else {
//           // If it's not a 401 error, we just forward the error
//           return throwError(() => error);
//         }
//       })
//     );
//   }
// }
//
// export const httpInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
// ];
