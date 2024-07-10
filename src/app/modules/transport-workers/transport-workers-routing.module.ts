import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportWorkersDashboardComponent } from './transport-workers-dashboard/transport-workers-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TransportWorkersDashboardComponent,
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
export class TransportWorkersRoutingModule {}
