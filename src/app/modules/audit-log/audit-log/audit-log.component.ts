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
      username: 'Marvellous Amusan',
      role: 'Enumerator',
      activityType: 'Login',
      details: 'Marvellous Amusan logged in from his desktop computer.',
      ssesion_id: 765438762,
    },
    {
      time: '2024-07-18 13:00:00',
      username: 'Dee Mavin',
      role: 'Admin',
      activityType: 'Sign-out',
      details: 'Dee Mavin  signed-out ',
      ip_address: '192.168.1.197',
    },
    {
      time: '2024-07-18 13:00:00',
      username: 'Solomon Louis',
      role: 'Enumerator',
      activityType: 'Login',
      details: 'Solomon Loius ###############################################',
      duration: '3 hour, 21 minutes',
    },
    {
      time: '2024-07-18 13:00:00',
      username: 'Akpan Ike',
      role: 'Driver',
      activityType: 'Login',
      details: 'Lorem ipsum sit amet consectetur',
    },
    {
      time: '2024-07-18 13:00:00',
      username: 'Josh Mande',
      role: 'Enumerator',
      activityType: 'Login',
      details: 'Neew user registration',
    },
    {
      time: '2024-07-18 13:00:00',
      username: 'Chinko Ekun',
      role: 'Enumerator',
      activityType: 'Error Log',
      details: 'Neew user registration',
    },
    {
      time: '2024-07-18 13:00:00',
      username: 'Dee Mavin',
      role: 'Admin',
      activityType: 'Sign-out',
      details: 'Dee Mavin  signed-out ',
    },
    {
      time: '2024-07-18 13:00:00',
      username: 'Dee Mavin',
      role: 'Admin',
      activityType: 'Sign-out',
      details: 'Dee Mavin  signed-out ',
    },
  ];
}
