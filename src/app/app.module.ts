import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {DashboardComponent} from "./modules/dashboard/dashboard/dashboard.component";
import {AddServiceComponent} from "./modules/services/add-service/add-service.component";
import {ServicesComponent} from "./modules/services/services/services.component";
import {ProfileComponent} from "./modules/settings/profile/profile.component";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import { HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./auth.interceptor";
import {NotificationComponent} from "./modules/settings/notification/notification.component";
import {ModalModule} from "ngx-bootstrap/modal";
import {SuccessDialogComponent} from "./shared/components/success-dialog/success-dialog.component";
import {LayoutModule} from "./modules/layout/layout.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ServicesRoutingModule} from "./modules/services/services-routing.module";
import {LottieModule} from "ngx-lottie";
import {ToggleSidebarDirective} from "./toggle-sidebar.directive";


export function lottiePlayerFactory(): any {
  return import('lottie-web/build/player/lottie_svg')
}

@Injectable({
    providedIn: 'root'
})
@NgModule({
  declarations: [
    AppComponent,
    AddServiceComponent,
    ServicesComponent,
    ProfileComponent,
    NotificationComponent,
    SuccessDialogComponent,
    ToggleSidebarDirective
  ],
  imports: [
    BrowserModule,
    // RouterOutlet,
    AppRoutingModule,
    DashboardModule,
    AuthenticationModule,
    ServicesRoutingModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
    LottieModule.forRoot({player: lottiePlayerFactory}),
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [ httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

