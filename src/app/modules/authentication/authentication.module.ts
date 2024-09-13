import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminCreatePasswordComponent } from './admin-create-password/admin-create-password.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, AdminCreatePasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
