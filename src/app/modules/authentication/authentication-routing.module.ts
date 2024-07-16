import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  //   pathMatch: 'full',
  //   data: {
  //     isExtranet: true,
  //   },
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   pathMatch: 'full',
  //   data: {
  //     isExtranet: true,
  //   },
  // },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPasswordComponent,
  //   pathMatch: 'full',
  //   data: {
  //     isExtranet: true,
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
