import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkmanagementPageComponent } from './parkmanagement-page/parkmanagement-page.component';
import { ParkmanagementFormComponent } from './parkmanagement-form/parkmanagement-form.component';
import { ParkManagementHomeComponent } from './park-management-home/park-management-home.component';

const routes: Routes = [
  {
    path: '',
    component: ParkmanagementPageComponent,
    children: [
      {
        path: 'parks',
        component: ParkManagementHomeComponent,
      },
      {
        path: 'add-park',
        component: ParkmanagementFormComponent,
      },
      {
        path: '',
        redirectTo: 'parks',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkManagementRoutingModule {}
