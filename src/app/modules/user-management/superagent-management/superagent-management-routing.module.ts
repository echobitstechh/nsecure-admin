import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperagentPageComponent } from './superagent-page/superagent-page.component';
import { SuperagentListComponent } from './superagent-list/superagent-list.component';
import { UpdateSuperagentComponent } from './update-superagent/update-superagent.component';
import { AddSuperagentComponent } from './add-superagent/add-superagent.component';
import { SuperagentDetailsComponent } from './superagent-details/superagent-details.component';

const routes: Routes = [
  {
    path: '',
    component: SuperagentPageComponent,
    children: [
      {
        path: 'list_of_super-agents',
        component: SuperagentListComponent,
        pathMatch: 'full',
      },
      {
        path: 'superagent-details',
        component: SuperagentDetailsComponent,
        pathMatch: 'full',
      },
      {
        path: 'add-superagent',
        component: AddSuperagentComponent,
        pathMatch: 'full',
      },
      {
        path: 'update_super_agent',
        component: UpdateSuperagentComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'list_of_super-agents', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperagentRoutingModule {}
