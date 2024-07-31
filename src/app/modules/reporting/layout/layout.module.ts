import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ReportingNavComponent } from './reporting-nav/reporting-nav.component';
import { ReportingHomeComponent } from './reportinghome/reportinghome.component';

@NgModule({
  declarations: [ReportingNavComponent, ReportingHomeComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
