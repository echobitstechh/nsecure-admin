import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkmanagementPageComponent } from './parkmanagement-page/parkmanagement-page.component';
import { ParkmanagementFormComponent } from './parkmanagement-form/parkmanagement-form.component';

const routes: Routes = [
  {
    path: '',
    component: ParkmanagementPageComponent,
    children: [
      {
        path: 'add-park',
        component: ParkmanagementFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkManagementRoutingModule {}
