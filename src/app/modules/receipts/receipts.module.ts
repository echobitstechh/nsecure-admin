import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptsRoutingModule } from './receipt-routing.module';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReceiptsCardComponent } from './receipts-card/receipts-card.component';



@NgModule({
  declarations: [ReceiptsComponent,ReceiptsCardComponent],
  imports: [
    CommonModule, ReceiptsRoutingModule
  ]
})
export class ReceiptsModule { }
