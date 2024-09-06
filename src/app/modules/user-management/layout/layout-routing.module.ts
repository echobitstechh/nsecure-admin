import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementHomeComponent } from './managementhome/managementhome.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementHomeComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin-management/admin-management.module').then(
            (m) => m.AdminManagementModule
          ),
      },
      {
        path: 'field-agent',
        loadChildren: () =>
          import('../fieldagent-management/fieldagent-management.module').then(
            (m) => m.FieldagentManagementModule
          ),
      },
      {
        path: 'super-agent',
        loadChildren: () =>
          import('../superagent-management/superagent-management.module').then(
            (m) => m.SuperagentManagementModule
          ),
      },
      {
        path: 'transport-workers',
        loadChildren: () =>
          import('../tworker-management/tworker-management.module').then(
            (m) => m.TworkerManagementModule
          ),
      },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
