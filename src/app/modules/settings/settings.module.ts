import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NotificationToggleComponent } from '../../notification-toggle/notification-toggle.component';
import { SecurityComponent } from './security/security.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    SecurityComponent,
    PreferencesComponent,
    NotificationToggleComponent,
  ],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
