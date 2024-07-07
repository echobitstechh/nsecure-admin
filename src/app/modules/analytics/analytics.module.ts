import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { AnalyticsDashboardComponenttRoutingModule } from './analytics-routing.module';
import { AnalyticsCardOneComponent } from './analytics-card-one/analytics-card-one.component';

@NgModule({
  declarations: [AnalyticsDashboardComponent, AnalyticsCardOneComponent],
  imports: [
    CommonModule,
    AnalyticsDashboardComponenttRoutingModule,
  ],
  exports: [AnalyticsDashboardComponent],
})
export class AnalyticsModule {}
