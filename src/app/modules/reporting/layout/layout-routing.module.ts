import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingHomeComponent } from './reportinghome/reportinghome.component';
import { PaymentReportComponent } from '../payment-report/payment-report.component';
import { CollectionReportComponent } from '../collection-report/collection-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingHomeComponent,
    children: [
      { path: 'payment-report', component: PaymentReportComponent },
      { path: 'collection-report', component: CollectionReportComponent },
      { path: '', redirectTo: 'collection-report', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
