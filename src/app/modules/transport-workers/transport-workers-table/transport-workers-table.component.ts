import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface workers {
  name: string;
  email: string;
  category: string;
  carType: string;
  plateNumber: string;
  address: string;
  carPark: string;
  image: string;
  selected: boolean;
}
@Component({
  selector: 'app-transport-workers',
  templateUrl: './transport-workers-table.component.html',
  styleUrls: ['./transport-workers-table.component.css'],
})
export class TransportWorkersTableComponent {
  @ViewChild('detailsModal') detailsModal!: TemplateRef<any>;

  @Input() workers: workers[] = [
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/adela.svg',
      selected: false,
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
      selected: false,
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
      selected: false,
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
      selected: false,
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
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/jason.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/jason.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
  ];
  pageSize = 10;
  currentPage = 1;
  totalPages = Math.ceil(this.workers.length / this.pageSize);

  constructor(public dialog: MatDialog) {}

  openDetails(worker: any) {
    this.dialog.open(this.detailsModal, {
      data: worker,
      disableClose: true,
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }
  toggleAll(event: any) {
    const checked = event.target.checked;
    this.workers.forEach((worker) => (worker.selected = checked));
  }
  get paginatedWorkers() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.workers.slice(start, end);
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
}
