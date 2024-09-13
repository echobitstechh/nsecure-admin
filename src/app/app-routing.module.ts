import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/authentication/login/login.component';
import { ForgotPasswordComponent } from './modules/authentication/forgot-password/forgot-password.component';
import { AuthGuard } from './services/authGuard.service';
import { AdminCreatePasswordComponent } from './modules/authentication/admin-create-password/admin-create-password.component';

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
    // canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'create-password',
    component: AdminCreatePasswordComponent,
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
      import('./modules/user-management/management.module').then(
        (m) => m.ManagementModule
      ),
    // canActivate: [AuthGuard],
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
    path: 'reporting',
    loadChildren: () =>
      import('./modules/reporting/reporting.module').then(
        (m) => m.ReportingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'receipts',
    loadChildren: () =>
      import('./modules/receipts/receipts.module').then(
        (m) => m.ReceiptsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./modules/team/team.module').then((m) => m.TeamModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'tax-collection',
    loadChildren: () =>
      import('./modules/tax-collection/tax-collection.module').then(
        (m) => m.TaxCollectionModule
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
