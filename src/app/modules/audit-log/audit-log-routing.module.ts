import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditLogComponent } from './audit-log/audit-log.component';

const routes: Routes = [
  {
    path: '',
    component: AuditLogComponent,
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
export class AuditLogComponentRoutingModule {}
