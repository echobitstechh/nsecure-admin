import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/authentication/login/login.component';
import { ForgotPasswordComponent } from './modules/authentication/forgot-password/forgot-password.component';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    // canActivate: [AuthGuard],
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
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
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
        (m) => m.TransportWorkersModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'audit_log',
    loadChildren: () =>
      import('./modules/audit-log/audit-log.module').then(
        (m) => m.AuditLogModule
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
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
