import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface AuditLog {
  time: string;
  username: string;
  ssesion_id?: number;
  role: string;
  activityType: string;
  details: string;
  ip_address?: number | string;
  durations?: number | string;
}

@Component({
  selector: 'app-audit-log-table',
  templateUrl: './audit-log-table.component.html',
  styleUrls: ['./audit-log-table.component.css'],
})
export class AuditLogTableComponent {
  @Input() logs: AuditLog[] = [];
  @ViewChild('detailsModal') detailsModal!: TemplateRef<any>;

  pageSize = 10;
  currentPage = 1;
  totalPages = Math.ceil(this.logs.length / this.pageSize);

  constructor(private dialog: MatDialog) {}

  get paginatedLogs() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.logs.slice(start, end);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  openDetails(log: AuditLog) {
    this.dialog.open(this.detailsModal, {
      data: log,
      disableClose: true,
      width: '500px',
      height: '400px',
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
