import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TworkerRoutingModule } from './tworker-management-routing.module';
import { TworkerPageComponent } from './tworker-page/tworker-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { TransportWorkersListComponent } from './transport-workers-list/transport-workers-list.component';

@NgModule({
  declarations: [TworkerPageComponent, TransportWorkersListComponent],
  imports: [CommonModule, TworkerRoutingModule, SharedModule],
})
export class TworkerManagementModule {}
