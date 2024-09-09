import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagementComponentRoutingModule } from './admin-management-routing.module';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AdminsComponent } from './admins/admins.component';
import { SharedModule } from '../../../shared/shared.module';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AdminManagementComponent,
    AdminsComponent,
    AdminDetailsComponent,
    AddAdminComponent,
    AdminFormComponent,
    UpdateAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminManagementComponentRoutingModule,
    SharedModule,
    ReactiveFormsModule, MatDialogModule
  ],
})
export class AdminManagementModule {}
