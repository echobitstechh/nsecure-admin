import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperagentPageComponent } from './superagent-page/superagent-page.component';

const routes: Routes = [
  {
    path: '',
    component: SuperagentPageComponent,
    children: [
      {
        path: 'list_of_super-agents',
        // component: '',
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
