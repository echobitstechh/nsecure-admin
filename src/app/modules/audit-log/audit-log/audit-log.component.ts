// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

// @Component({
//   selector: 'app-audit-log',
//   templateUrl: './audit-log.component.html',
//   styleUrl: './audit-log.component.css',
// })
// export class AuditLogComponent {
//   constructor(public dialog: MatDialog) {}

//   openFilterDialog(): void {
//     const dialogRef = this.dialog.open(FilterDialogComponent, {
//       disableClose: true,
//       width: '400px',
//       data: {
//         userType: '',
//         activity: '',
//         fromDate: '',
//         toDate: '',
//       },
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       if (result) {
//         console.log('Filters applied:', result);
//       }
//     });
//   }

//   onSearch(query: string) {
//     console.log('Searching for:', query);
//   }
//   auditLogs = [
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Marvellous Amusan',
//       role: 'Enumerator',
//       activityType: 'Login',
//       details: 'Marvellous Amusan logged in from his desktop computer.',
//       ssesion_id: 765438762,
//     },
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Dee Mavin',
//       role: 'Admin',
//       activityType: 'Sign-out',
//       details: 'Dee Mavin  signed-out ',
//       ip_address: '192.168.1.197',
//     },
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Solomon Louis',
//       role: 'Enumerator',
//       activityType: 'Login',
//       details: 'Solomon Loius ###############################################',
//       duration: '3 hour, 21 minutes',
//     },
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Akpan Ike',
//       role: 'Driver',
//       activityType: 'Login',
//       details: 'Lorem ipsum sit amet consectetur',
//     },
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Josh Mande',
//       role: 'Enumerator',
//       activityType: 'Login',
//       details: 'Neew user registration',
//     },
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Chinko Ekun',
//       role: 'Enumerator',
//       activityType: 'Error Log',
//       details: 'Neew user registration',
//     },
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Dee Mavin',
//       role: 'Admin',
//       activityType: 'Sign-out',
//       details: 'Dee Mavin  signed-out ',
//     },
//     {
//       time: '2024-07-18 13:00:00',
//       username: 'Dee Mavin',
//       role: 'Admin',
//       activityType: 'Sign-out',
//       details: 'Dee Mavin  signed-out ',
//     },
//   ];
// }
// import { Component, ViewChild, TemplateRef } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

// interface AuditLog {
//   time: string;
//   username: string;
//   role: string;
//   activityType: string;
//   details: string;
//   sessionId?: string;
//   ipAddress?: string;
//   duration?: string;
// }

// @Component({
//   selector: 'app-audit-log',
//   templateUrl: './audit-log.component.html',
//   styleUrls: ['./audit-log.component.css'],
// })
// export class AuditLogComponent {
//   @ViewChild('detailsButton') detailsButton!: TemplateRef<any>;

//   logs: AuditLog[] = [
//     {
//       time: '2024-07-01 10:00',
//       username: 'john.doe',
//       role: 'Admin',
//       activityType: 'Login',
//       details: 'Logged in successfully',
//       sessionId: '123',
//       ipAddress: '192.168.0.1',
//       duration: '5m',
//     },
//     {
//       time: '2024-07-01 10:15',
//       username: 'jane.smith',
//       role: 'User',
//       activityType: 'File Upload',
//       details: 'Uploaded a document',
//       sessionId: '124',
//       ipAddress: '192.168.0.2',
//       duration: '3m',
//     },
//     // More log entries
//   ];

//   auditLogColumns = [
//     { field: 'time', label: 'Time', sortable: true },
//     { field: 'username', label: 'User Name', sortable: true },
//     { field: 'role', label: 'Role', sortable: true },
//     { field: 'activityType', label: 'Activity Type', sortable: true },
//     { field: 'details', label: 'Details', sortable: true },
//     { field: '', label: '', template: this.detailsButton },
//   ];

//   auditLogActions = [
//     // You can define actions if necessary, or leave it empty
//   ];

//   constructor(private dialog: MatDialog) {}

//     openFilterDialog(): void {
//       const dialogRef = this.dialog.open(FilterDialogComponent, {
//         disableClose: true,
//         width: '400px',
//         data: {
//           userType: '',
//           activity: '',
//           fromDate: '',
//           toDate: '',
//         },
//       });

//       dialogRef.afterClosed().subscribe((result) => {
//         if (result) {
//           console.log('Filters applied:', result);
//         }
//       });
//     }
//   openDetails(log: AuditLog) {
//     this.dialog.open(this.detailsButton, {
//       data: log,
//       disableClose: true,
//     });
//   }
// }

import {
  Component,
  ViewChild,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

interface AuditLog {
  time: string;
  username: string;
  role: string;
  activityType: string;
  details: string;
  sessionId?: string;
  ipAddress?: string;
  duration?: string;
}

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css'],
})
export class AuditLogComponent implements AfterViewInit {
  @ViewChild('detailsButton') detailsButton!: TemplateRef<any>;

  logs: AuditLog[] = [
    {
      time: '2024-07-01 10:00',
      username: 'john.doe',
      role: 'Admin',
      activityType: 'Login',
      details: 'Logged in successfully',
      sessionId: '123',
      ipAddress: '192.168.0.1',
      duration: '5m',
    },
    {
      time: '2024-07-01 10:15',
      username: 'jane.smith',
      role: 'User',
      activityType: 'File Upload',
      details: 'Uploaded a document',
      sessionId: '124',
      ipAddress: '192.168.0.2',
      duration: '3m',
    },
    // More log entries
  ];

  auditLogColumns: any[] = [];
  auditLogActions = [
    // You can define actions if necessary, or leave it empty
  ];
  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.auditLogColumns = [
      { field: 'time', label: 'Time', sortable: true },
      { field: 'username', label: 'User Name', sortable: true },
      { field: 'role', label: 'Role', sortable: true },
      { field: 'activityType', label: 'Activity Type', sortable: true },
      { field: 'details', label: 'Details', sortable: true },
      { field: '', label: '', template: this.detailsButton },
    ];
  }

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

  openDetails(log: AuditLog) {
    this.dialog.open(this.detailsButton, {
      data: log,
      disableClose: true,
    });
  }
  closeModal() {
    this.dialog.closeAll();
  }
}
