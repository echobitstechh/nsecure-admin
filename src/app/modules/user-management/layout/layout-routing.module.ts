import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { ManagementDetailsComponent } from '../management-details/management-details.component';
import { ManagementHomeComponent } from './managementhome/managementhome.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementHomeComponent,
    children: [
      { path: 'admins', component: UsersComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'admin-details', component: ManagementDetailsComponent },
      { path: '', redirectTo: 'admins', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
