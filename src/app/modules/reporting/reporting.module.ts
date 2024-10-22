import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingRoutingModule } from './reporting-routing.module';
import { CollectionReportComponent } from './collection-report/collection-report.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';


import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReportingHomeCard } from './layout/reportinghome-card/reportinghome-card/reportinghome-card.component';



@NgModule({
  declarations: [InvoiceReportComponent, CollectionReportComponent,ReportingHomeCard],
  imports: [CommonModule, ReportingRoutingModule, SharedModule, FormsModule,],
})
export class ReportingModule {}
