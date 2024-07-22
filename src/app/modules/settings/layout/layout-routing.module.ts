import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsHomeComponent } from './settingshome/settingshome.component';
import { ProfileComponent } from '../profile/profile.component';
import { PreferencesComponent } from '../preferences/preferences.component';
import { SecurityComponent } from '../security/security.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsHomeComponent,
    children: [
      { path: 'edit-profile', component: ProfileComponent },
      { path: 'preferences', component: PreferencesComponent },
      { path: 'security', component: SecurityComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
