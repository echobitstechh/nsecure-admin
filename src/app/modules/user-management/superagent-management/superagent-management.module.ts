import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperagentPageComponent } from './superagent-page/superagent-page.component';
import { SuperagentRoutingModule } from './superagent-management-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { SuperagentListComponent } from './superagent-list/superagent-list.component';
import { SuperagentFormComponent } from './superagent-form/superagent-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSuperagentComponent } from './add-superagent/add-superagent.component';
import { UpdateSuperagentComponent } from './update-superagent/update-superagent.component';
import { SuperagentDetailsComponent } from './superagent-details/superagent-details.component';

@NgModule({
  declarations: [
    SuperagentPageComponent,
    SuperagentListComponent,
    SuperagentFormComponent,
    AddSuperagentComponent,
    UpdateSuperagentComponent,
    SuperagentDetailsComponent,
  ],
  imports: [
    CommonModule,
    SuperagentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SuperagentManagementModule {}
