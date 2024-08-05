import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SuccessDialogComponent } from './shared/components/success-dialog/success-dialog.component';
import { LayoutModule } from './modules/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { ToggleSidebarDirective } from './toggle-sidebar.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {httpInterceptorProviders} from "./auth.interceptor";
import {ProfileComponent} from "./modules/settings/profile/profile.component";

export function lottiePlayerFactory(): any {
  return import('lottie-web/build/player/lottie_svg');
}

@Injectable({
  providedIn: 'root',
})
@NgModule({
  declarations: [
    AppComponent,
    // ProfileComponent,
    // PreferencesComponent,
    SuccessDialogComponent,
    ToggleSidebarDirective,
  ],
  imports: [
    BrowserModule,
    // RouterOutlet,
    AppRoutingModule,
    DashboardModule,
    AuthenticationModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
    LottieModule.forRoot({ player: lottiePlayerFactory }),
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [
    httpInterceptorProviders,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
