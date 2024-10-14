import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkManagementRoutingModule } from './park-management-routing.module';
import { ParkmanagementPageComponent } from './parkmanagement-page/parkmanagement-page.component';
import { ParkmanagementFormComponent } from './parkmanagement-form/parkmanagement-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParkmanagementPageComponent, ParkmanagementFormComponent],
  imports: [
    CommonModule,
    ParkManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ParkManagementModule {}
