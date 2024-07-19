import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { AnalyticsDashboardComponenttRoutingModule } from './analytics-routing.module';
import { AnalyticsCardOneComponent } from './analytics-card-one/analytics-card-one.component';
import { ActiveEnumeratorCardComponent } from './active-enumerator-card/active-enumerator-card.component';
import { AnalyticsCardTwoComponent } from './analytics-card-two/analytics-card-two.component';
import { RecentPayersComponent } from './recent-payers/recent-payers.component';
import { TaxProgressCardComponent } from './tax-progress-card/tax-progress-card.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AnalyticsDashboardComponent,
    AnalyticsCardOneComponent,
    ActiveEnumeratorCardComponent,
    AnalyticsCardTwoComponent,
    RecentPayersComponent,
    GaugeChartComponent,
    LineChartComponent,
    TaxProgressCardComponent,
  ],
  imports: [CommonModule, AnalyticsDashboardComponenttRoutingModule],
  exports: [AnalyticsDashboardComponent],
})
export class AnalyticsModule {}
