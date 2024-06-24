import { Routes } from '@angular/router';
import {LoginComponent} from "./modules/authentication/login/login.component";

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }, // Redirect to log in
  {
    path: 'user-management',
    loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
];
