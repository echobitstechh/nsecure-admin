import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingRoutingModule } from './reporting-routing.module';
import { CollectionReportComponent } from './collection-report/collection-report.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';

@NgModule({
  declarations: [InvoiceReportComponent, CollectionReportComponent],
  imports: [CommonModule, ReportingRoutingModule],
})
export class ReportingModule {}
