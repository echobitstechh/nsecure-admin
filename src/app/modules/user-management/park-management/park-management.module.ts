import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkManagementRoutingModule } from './park-management-routing.module';
import { ParkmanagementPageComponent } from './parkmanagement-page/parkmanagement-page.component';
import { ParkmanagementFormComponent } from './parkmanagement-form/parkmanagement-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ParksListCardComponent } from './parks-list-card/parks-list-card.component';
import { ParkManagementHomeComponent } from './park-management-home/park-management-home.component';
import { ParksCardComponent } from './parks-card/parks-card.component';
import { ParkDebtorsComponent } from './park-debtors/park-debtors.component';
import { ParksComponent } from './parks/parks.component';
import { ParksFieldAgentsComponent } from './parks-field-agents/parks-field-agents.component';
import { ParksExpectedRevenueComponent } from './parks-expected-revenue/parks-expected-revenue.component';
import { ParksRevenueComponent } from './parks-revenue/parks-revenue.component';
import { ParkPieChartComponent } from './park-pie-chart/park-pie-chart.component';

@NgModule({
  declarations: [
    ParkmanagementPageComponent,
    ParkmanagementFormComponent,
    ParksListCardComponent,
    ParkManagementHomeComponent,
    ParksCardComponent,
    ParkDebtorsComponent,
    ParksComponent,
    ParksFieldAgentsComponent,
    ParksExpectedRevenueComponent,
    ParksRevenueComponent,
    ParkPieChartComponent,
  ],
  imports: [
    CommonModule,
    ParkManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ParkManagementModule {}
