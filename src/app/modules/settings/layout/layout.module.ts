import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SettingsHomeComponent } from './settingshome/settingshome.component';
import { SettingsNavComponent } from '../settings-nav/settings-nav.component';

@NgModule({
  declarations: [SettingsHomeComponent, SettingsNavComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
