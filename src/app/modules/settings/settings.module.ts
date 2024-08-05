import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SecurityComponent } from './security/security.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [SecurityComponent, PreferencesComponent, ProfileComponent],
    imports: [CommonModule, SettingsRoutingModule, SharedModule, ReactiveFormsModule],
})
export class SettingsModule {}
