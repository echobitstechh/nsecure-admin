import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditLogComponentRoutingModule } from './audit-log-routing.module';
import { AuditLogCardComponent } from './audit-log-card/audit-log-card.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { FormsModule } from '@angular/forms';
import { AuditLogTableComponent } from './audit-log-table/audit-log-table.component';

@NgModule({
  declarations: [
    AuditLogCardComponent,
    AuditLogComponent,
    FilterDialogComponent, AuditLogTableComponent
  ],
  imports: [
    CommonModule,
    AuditLogComponentRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class AuditLogModule {}
