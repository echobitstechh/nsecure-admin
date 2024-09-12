import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldManagementRoutingModule } from './fieldagent-management-routing.module';
import { FieldagentPageComponent } from './fieldagent-page/fieldagent-page.component';
import { FieldagentFormComponent } from './fieldagent-form/fieldagent-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldagentDetailsComponent } from './fieldagent-details/fieldagent-details.component';
import { FieldagentHomeComponent } from './fieldagent-home/fieldagent-home.component';
import { AddFieldagentComponent } from './add-fieldagent/add-fieldagent.component';
import { UpdateFieldagentComponent } from './update-fieldagent/update-fieldagent.component';

@NgModule({
  declarations: [
    FieldagentPageComponent,
    FieldagentFormComponent,
    FieldagentDetailsComponent,
    FieldagentHomeComponent,
    AddFieldagentComponent,
    UpdateFieldagentComponent,
  ],
  imports: [
    CommonModule,
    FieldManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class FieldagentManagementModule {}
