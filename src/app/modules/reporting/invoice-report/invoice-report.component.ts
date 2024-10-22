import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-payment-report',
  templateUrl: './invoice-report.component.html',
  styleUrl: './invoice-report.component.css',
})
export class InvoiceReportComponent {
  constructor(public dialog: MatDialog) {}
  auditLogs = [
    {
      invoice: 'INV12345',
      name: 'Victor Faeren',
      categorys: 'Intern',
      amount: '#100,000' ,
      date: '18/10/2024',
      status:'paid'
      
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
