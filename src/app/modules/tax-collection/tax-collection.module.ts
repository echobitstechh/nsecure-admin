import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxCollectionRoutingModule } from './tax-collection-routing.module';
import { TaxCollectionComponent } from './tax-collection/tax-collection.component';



@NgModule({
  declarations: [TaxCollectionComponent],
  imports: [
    CommonModule, TaxCollectionRoutingModule
  ]
})
export class TaxCollectionModule { }
