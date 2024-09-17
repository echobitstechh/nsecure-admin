import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminManagementComponent,
    children: [
      { path: 'admins-list', component: AdminsComponent, pathMatch: 'full' },
      {
        path: 'admin-detail/:id',
        component: AdminDetailsComponent,
        pathMatch: 'full',
      },
      { path: 'create-admin', component: AddAdminComponent, pathMatch: 'full' },
      {
        path: 'update-admin/:id',
        component: UpdateAdminComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'admins-list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminManagementComponentRoutingModule {}
