import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldManagementRoutingModule } from './fieldagent-management-routing.module';
import { FieldagentPageComponent } from './fieldagent-page/fieldagent-page.component';

@NgModule({
  declarations: [FieldagentPageComponent],
  imports: [CommonModule, FieldManagementRoutingModule],
})
export class FieldagentManagementModule {}
