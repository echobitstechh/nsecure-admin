import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingRoutingModule } from './reporting-routing.module';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { CollectionReportComponent } from './collection-report/collection-report.component';

@NgModule({
  declarations: [PaymentReportComponent, CollectionReportComponent],
  imports: [CommonModule, ReportingRoutingModule],
})
export class ReportingModule {}
