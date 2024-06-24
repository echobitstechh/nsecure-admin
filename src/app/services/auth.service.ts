// auth.service.ts
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserControllerService } from "../api";
import { tap } from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USER_ID = 'USER_ID';

  constructor(private authService: UserControllerService,
              private router: Router) {}

  refreshToken(): Observable<any> {
    return this.authService.refreshToken().pipe(
      tap((response) => {
        if (response.status === 200) {
          this.storeJwtToken(response?.data?.accessToken!);
          this.storeRefreshToken(response?.data?.refreshToken!);
        }
      })
    );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  getUserId() {
    const userId = localStorage.getItem(this.USER_ID);
    return userId ? parseInt(userId, 10) : null;
  }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  storeRefreshToken(refreshToken: string) {
    localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
  }

  storeUserId(userId: number) {
    localStorage.setItem(this.USER_ID, userId.toString());
  }

  deleteTokens(){
    localStorage.clear()
  }

  logOut() {
    // Clear all local storage items
    this.deleteTokens();
    // Optionally, navigate the user to the login or home page
    this.router.navigate(['/login']); // Adjust the route as necessary
  }
}
