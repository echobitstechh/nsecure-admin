import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
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
export class TeamRoutingModule {}
