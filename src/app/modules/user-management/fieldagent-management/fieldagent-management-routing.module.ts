import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldagentPageComponent } from './fieldagent-page/fieldagent-page.component';

const routes: Routes = [
  {
    path: '',
    component: FieldagentPageComponent,
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
export class FieldManagementRoutingModule {}
