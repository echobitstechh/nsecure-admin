import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportWorkersRoutingModule } from './transport-workers-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TransportWorkersDashboardComponent } from './transport-workers-dashboard/transport-workers-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TransportWorkersDashboardComponent],
  imports: [
    CommonModule,
    TransportWorkersRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class TransportWorkersModule {}
