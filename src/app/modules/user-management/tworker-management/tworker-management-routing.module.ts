import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TworkerPageComponent } from './tworker-page/tworker-page.component';
import { TransportWorkersListComponent } from './transport-workers-list/transport-workers-list.component';

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
      { path: '', redirectTo: 'list-of-workers', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TworkerRoutingModule {}
