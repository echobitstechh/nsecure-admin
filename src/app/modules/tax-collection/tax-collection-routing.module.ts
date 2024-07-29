import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxCollectionComponent } from './tax-collection/tax-collection.component';

const routes: Routes = [
  {
    path: '',
    component: TaxCollectionComponent,
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
export class TaxCollectionRoutingModule {}
