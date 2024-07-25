import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrl: './audit-log.component.css',
})
export class AuditLogComponent {
  constructor(public dialog: MatDialog) {}

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      disableClose: true,
      width: '400px',
      data: {
        userType: '',
        activity: '',
        fromDate: '',
        toDate: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Filters applied:', result);
      }
    });
  }

  onSearch(query: string) {
    console.log('Searching for:', query);
  }
  auditLogs = [
    {
      time: '2024-07-18 13:00:00',
      userName: 'Marvellous Amusan',
      role: 'Enumerator',
      activityType: 'Login',
      details: 'Marvellous Amusan logged in from his desktop computer.',
    },
    {
      time: '2024-07-18 13:00:00',
      userName: 'Dee Mavin',
      role: 'Admin',
      activityType: 'Sign-out',
      details: 'Dee Mavin  signed-out ',
    },
    {
      time: '2024-07-18 13:00:00',
      userName: 'Solomon Louis',
      role: 'Enumerator',
      activityType: 'Login',
      details: 'Solomon Loius ###############################################',
    },
  ];
}
