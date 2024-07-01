import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAndSupportComponent } from './contact-and-support/contact-and-support.component';

const routes: Routes = [
  {
    path: '',
    component: ContactAndSupportComponent,
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
export class ContactAndSupportComponentRoutingModule {}
