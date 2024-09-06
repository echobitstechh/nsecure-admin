import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagementComponentRoutingModule } from './admin-management-routing.module';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AdminsComponent } from './admins/admins.component';
import { SharedModule } from '../../../shared/shared.module';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAdminComponent } from './add-admin/add-admin.component';

@NgModule({
  declarations: [
    AdminManagementComponent,
    AdminsComponent,
    AdminDetailsComponent,
    AddAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminManagementComponentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AdminManagementModule {}
