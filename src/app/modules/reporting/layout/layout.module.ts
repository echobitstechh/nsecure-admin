import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ReportingNavComponent } from './reporting-nav/reporting-nav.component';
import { ReportingHomeComponent } from './reportinghome/reportinghome.component';
import { ReportingHomeCard } from './reportinghome-card/reportinghome-card.component';

@NgModule({
  declarations: [
    ReportingNavComponent,
    ReportingHomeComponent,
    ReportingHomeCard,
  ],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
