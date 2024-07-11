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
      image: 'assets/images/adela.svg',
    },
    {
      name: 'Dapious Kodewarlock',
      email: 'kodewarlock@gmail.com',
      category: 'Car',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/jason.svg',
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Napep',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/adela.svg',
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/adela.svg',
    },
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
