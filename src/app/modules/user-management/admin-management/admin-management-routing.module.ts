import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AdminManagementComponent,
  //   pathMatch: 'full',
  //   data: {
  //     isExtranet: false,
  //   },
  // },
  {
    path: '',
    component: AdminManagementComponent,
    children: [
      { path: 'admins-list', component: AdminsComponent, pathMatch: 'full' },
      {
        path: 'admin-detail',
        component: AdminDetailsComponent,
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
