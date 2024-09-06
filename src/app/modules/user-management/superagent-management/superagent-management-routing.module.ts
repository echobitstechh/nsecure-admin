import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperagentPageComponent } from './superagent-page/superagent-page.component';

const routes: Routes = [
  {
    path: '',
    component: SuperagentPageComponent,
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
export class SuperagentRoutingModule {}
