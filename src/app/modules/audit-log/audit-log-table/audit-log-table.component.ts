import { Component, Input } from '@angular/core';

interface AuditLog {
  time: string;
  userName: string;
  role: string;
  activityType: string;
  details: string;
}

@Component({
  selector: 'app-audit-log-table',
  templateUrl: './audit-log-table.component.html',
  styleUrls: ['./audit-log-table.component.css'],
})
export class AuditLogTableComponent {
  @Input() logs: AuditLog[] = [];
}
