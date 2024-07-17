import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/authentication/login/login.component';
import { HomeComponent } from './modules/layout/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { UsersComponent } from './modules/user-management/users/users.component';
import { ProfileComponent } from './modules/settings/profile/profile.component';
import { PreferencesComponent } from './modules/settings/preferences/preferences.component';
import { AddUserComponent } from './modules/user-management/add-user/add-user.component';
import { AuthGuard } from './services/authGuard.service';
import { ForgotPasswordComponent } from './modules/authentication/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./modules/analytics/analytics.module').then(
        (m) => m.AnalyticsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // Redirect to log in
  {
    path: 'contact-and-support',
    loadChildren: () =>
      import('./modules/contact-and-support/contact-and-support.module').then(
        (m) => m.ContactAndSupportModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'management',
    loadChildren: () =>
      import('./modules/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'transport_workers',
    loadChildren: () =>
      import('./modules/transport-workers/transport-workers.module').then(
        (m) => m.ServicesModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
