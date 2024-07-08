import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { AnalyticsDashboardComponenttRoutingModule } from './analytics-routing.module';
import { AnalyticsCardOneComponent } from './analytics-card-one/analytics-card-one.component';
import { ActiveEnumeratorCardComponent } from './active-enumerator-card/active-enumerator-card.component';

@NgModule({
  declarations: [AnalyticsDashboardComponent, AnalyticsCardOneComponent, ActiveEnumeratorCardComponent],
  imports: [
    CommonModule,
    AnalyticsDashboardComponenttRoutingModule,
  ],
  exports: [AnalyticsDashboardComponent],
})
export class AnalyticsModule {}
