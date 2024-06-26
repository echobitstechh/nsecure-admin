import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false,
    },
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
