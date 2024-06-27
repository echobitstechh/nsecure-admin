import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/authentication/login/login.component';
import { HomeComponent } from './modules/layout/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { UsersComponent } from './modules/user-management/users/users.component';
import { ServicesComponent } from './modules/services/services/services.component';
import { ProfileComponent } from './modules/settings/profile/profile.component';
import { PreferencesComponent } from './modules/settings/preferences/preferences.component';
import { AddUserComponent } from './modules/user-management/add-user/add-user.component';
import { AddServiceComponent } from './modules/services/add-service/add-service.component';
import { AuthGuard } from './services/authGuard.service';
import { ForgotPasswordComponent } from './modules/authentication/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    // canActivate: [AuthGuard],
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
    path: 'management',
    loadChildren: () =>
      import('./modules/user-management/user-management.module').then(
        (m) => m.UserManagementModule
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
    path: 'services',
    loadChildren: () =>
      import('./modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
