import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkManagementRoutingModule } from './park-management-routing.module';
import { ParkmanagementPageComponent } from './parkmanagement-page/parkmanagement-page.component';



@NgModule({
  declarations: [ParkmanagementPageComponent],
  imports: [
    CommonModule, ParkManagementRoutingModule
  ]
})
export class ParkManagementModule { }
