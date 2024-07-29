import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './reporting/reporting.component';

@NgModule({
  declarations: [ReportingComponent],
  imports: [CommonModule, ReportingRoutingModule],
})
export class ReportingModule {}
