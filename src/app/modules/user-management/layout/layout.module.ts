import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ManagementHomeComponent } from './managementhome/managementhome.component';

@NgModule({
  declarations: [ManagementHomeComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
