import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperagentPageComponent } from './superagent-page/superagent-page.component';
import { SuperagentRoutingModule } from './superagent-management-routing.module';

@NgModule({
  declarations: [SuperagentPageComponent],
  imports: [CommonModule, SuperagentRoutingModule],
})
export class SuperagentManagementModule {}
