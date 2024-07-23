import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditLogComponentRoutingModule } from './audit-log-routing.module';
import { AuditLogCardComponent } from './audit-log-card/audit-log-card.component';
import { AuditLogComponent } from './audit-log/audit-log.component';

@NgModule({
  declarations: [AuditLogCardComponent, AuditLogComponent],
  imports: [CommonModule, AuditLogComponentRoutingModule],
})
export class AuditLogModule {}
