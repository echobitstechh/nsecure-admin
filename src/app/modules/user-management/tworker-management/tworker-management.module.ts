import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TworkerRoutingModule } from './tworker-management-routing.module';
import { TworkerPageComponent } from './tworker-page/tworker-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { TransportWorkersListComponent } from './transport-workers-list/transport-workers-list.component';
import { TworkerFormComponent } from './tworker-form/tworker-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTransportWorkerComponent } from './add-transport-worker/add-transport-worker.component';
import { UpdateTransportWorkerComponent } from './update-transport-worker/update-transport-worker.component';
import { TworkerDetailsComponent } from './tworker-details/tworker-details.component';

@NgModule({
  declarations: [
    TworkerPageComponent,
    TransportWorkersListComponent,
    TworkerFormComponent,
    AddTransportWorkerComponent,
    UpdateTransportWorkerComponent,
    TworkerDetailsComponent,
  ],
  imports: [
    CommonModule,
    TworkerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class TworkerManagementModule {}
