import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkmanagementPageComponent } from './parkmanagement-page/parkmanagement-page.component';
import { ParkmanagementFormComponent } from './parkmanagement-form/parkmanagement-form.component';
import { ParkManagementHomeComponent } from './park-management-home/park-management-home.component';
import { ParkDebtorsComponent } from './park-debtors/park-debtors.component';
import { ParksComponent } from './parks/parks.component';
import { ParksFieldAgentsComponent } from './parks-field-agents/parks-field-agents.component';
import { ParksRevenueComponent } from './parks-revenue/parks-revenue.component';
import { ParksExpectedRevenueComponent } from './parks-expected-revenue/parks-expected-revenue.component';

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
        path: 'all-parks',
        component: ParksComponent,
      },
      {
        path: 'debtors',
        component: ParkDebtorsComponent,
      },
      {
        path: 'park-field-agents',
        component: ParksFieldAgentsComponent,
      },
      {
        path: 'park-revenues',
        component: ParksRevenueComponent,
      },
      {
        path: 'expected-park-revenues',
        component: ParksExpectedRevenueComponent,
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
