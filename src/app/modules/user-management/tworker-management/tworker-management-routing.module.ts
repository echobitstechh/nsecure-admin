import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TworkerPageComponent } from './tworker-page/tworker-page.component';

const routes: Routes = [
  {
    path: '',
    component: TworkerPageComponent,
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
export class TworkerRoutingModule {}
