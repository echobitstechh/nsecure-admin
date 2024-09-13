import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TworkerPageComponent } from './tworker-page/tworker-page.component';
import { TransportWorkersListComponent } from './transport-workers-list/transport-workers-list.component';
import { AddTransportWorkerComponent } from './add-transport-worker/add-transport-worker.component';
import { UpdateTransportWorkerComponent } from './update-transport-worker/update-transport-worker.component';
import { TworkerDetailsComponent } from './tworker-details/tworker-details.component';

const routes: Routes = [
  {
    path: '',
    component: TworkerPageComponent,
    children: [
      {
        path: 'list-of-workers',
        component: TransportWorkersListComponent,
        pathMatch: 'full',
      },
      {
        path: 'worker-details',
        component: TworkerDetailsComponent,
        pathMatch: 'full',
      },
      {
        path: 'add-worker',
        component: AddTransportWorkerComponent,
        pathMatch: 'full',
      },
      {
        path: 'update-worker',
        component: UpdateTransportWorkerComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'list-of-workers', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TworkerRoutingModule {}
