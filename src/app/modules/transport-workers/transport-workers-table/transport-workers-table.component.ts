import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-transport-workers',
  templateUrl: './transport-workers-table.component.html',
  styleUrls: ['./transport-workers-table.component.css'],
})
export class TransportWorkersTableComponent {
  @ViewChild('detailsModal') detailsModal!: TemplateRef<any>;

  workers = [
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/worker1.jpg',
    },
    // Add more worker objects here
  ];

  constructor(public dialog: MatDialog) {}

  openDetails(worker: any) {
    this.dialog.open(this.detailsModal, {
      data: worker,
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
