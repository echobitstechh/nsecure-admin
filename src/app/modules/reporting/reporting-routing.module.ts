import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting/reporting.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingRoutingModule {}
