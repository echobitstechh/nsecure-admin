import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-collection-report',
  templateUrl: './collection-report.component.html',
  styleUrl: './collection-report.component.css',
})
export class CollectionReportComponent {
  constructor(public dialog: MatDialog) {}
  auditLogs = [
    {
      invoice: 'INV12345',
      name: 'Victor Faeren',
      categorys: 'Intern',
      amount: '#100,000' ,
      date: '18/10/2024'
      
    },
    {
      invoice: 'INV12345',
      name: 'Victor Faeren',
      categorys: 'Intern',
      amount: '#100,000' ,
      date: '18/10/2024'
      
    },
    {
      invoice: 'INV12345',
      name: 'Victor Faeren',
      categorys: 'Intern',
      amount: '#100,000' ,
      date: '18/10/2024'
      
    },
    {
      invoice: 'INV12345',
      name: 'Victor Faeren',
      categorys: 'Intern',
      amount: '#100,000' ,
      date: '18/10/2024'
      
    },
    {
      invoice: 'INV12345',
      name: 'Victor Faeren',
      categorys: 'Intern',
      amount: '#100,000' ,
      date: '18/10/2024'
      
    },
  ];
  closeModal() {
    this.dialog.closeAll();
  }

}
