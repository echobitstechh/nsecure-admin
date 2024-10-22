import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionReportComponent } from '../collection-report/collection-report.component';
import { InvoiceReportComponent } from '../invoice-report/invoice-report.component';
import { ReportingHomeComponent } from './reportinghome/reportinghome.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingHomeComponent,
    children: [
      { path: 'invoice-report', component: InvoiceReportComponent },
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
