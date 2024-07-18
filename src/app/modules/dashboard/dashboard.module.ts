import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardCardTwoComponent } from './dashboard-card-two/dashboard-card-two.component';
import { EnumeratorListCardComponent } from './enumerator-list-card/enumerator-list-card.component';
import { RegisterCardComponent } from './register-card/register-card.component';
// import {AuthInterceptor} from "../../auth.interceptor";

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCardComponent,
    DashboardCardTwoComponent,
    EnumeratorListCardComponent,
    RegisterCardComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: [],
})
export class DashboardModule {}
