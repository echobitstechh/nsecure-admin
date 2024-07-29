import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptsRoutingModule } from './receipt-routing.module';
import { ReceiptsComponent } from './receipts/receipts.component';



@NgModule({
  declarations: [ReceiptsComponent],
  imports: [
    CommonModule, ReceiptsRoutingModule
  ]
})
export class ReceiptsModule { }
