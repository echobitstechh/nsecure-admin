import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ReportingNavComponent } from './reporting-nav/reporting-nav.component';





@NgModule({
  declarations: [ReportingNavComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
