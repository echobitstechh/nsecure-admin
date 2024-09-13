import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkmanagementPageComponent } from './parkmanagement-page/parkmanagement-page.component';

const routes: Routes = [
  {
    path: '',
    component: ParkmanagementPageComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkManagementRoutingModule {}
