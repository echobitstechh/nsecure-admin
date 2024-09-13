import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldagentPageComponent } from './fieldagent-page/fieldagent-page.component';
import { FieldagentDetailsComponent } from './fieldagent-details/fieldagent-details.component';
import { FieldagentHomeComponent } from './fieldagent-home/fieldagent-home.component';
import { AddFieldagentComponent } from './add-fieldagent/add-fieldagent.component';
import { UpdateFieldagentComponent } from './update-fieldagent/update-fieldagent.component';

const routes: Routes = [
  {
    path: '',
    component: FieldagentHomeComponent,
    children: [
      {
        path: 'list_of_field-agents',
        component: FieldagentPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'fieldagent-details',
        component: FieldagentDetailsComponent,
        pathMatch: 'full',
      },
      {
        path: 'add-fieldagent',
        component: AddFieldagentComponent,
        pathMatch: 'full',
      },
      {
        path: 'update_field_agent',
        component: UpdateFieldagentComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'list_of_field-agents', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldManagementRoutingModule {}
