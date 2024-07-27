// import { Component, ViewChild, TemplateRef } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-transport-workers',
//   templateUrl: './transport-workers-table.component.html',
//   styleUrls: ['./transport-workers-table.component.css'],
// })
// export class TransportWorkersTableComponent {
//   @ViewChild('detailsModal') detailsModal!: TemplateRef<any>;

//   workers = [
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/adela.svg',
//       selected: false,
//     },
//     {
//       name: 'Dapious Kodewarlock',
//       email: 'kodewarlock@gmail.com',
//       category: 'Car',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/jason.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Napep',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/adela.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/adela.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/jason.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/jason.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//     {
//       name: 'Mavin Dee',
//       email: 'mavindee@gmail.com',
//       category: 'Bus',
//       carType: 'Toyota',
//       plateNumber: 'DKA-234-uy',
//       address: 'NO 12 teen street Abuja, Nigeria',
//       carPark: 'Peace Park',
//       image: 'assets/images/christian.svg',
//       selected: false,
//     },
//   ];
//   pageSize = 10;
//   currentPage = 1;
//   totalPages = Math.ceil(this.workers.length / this.pageSize);

//   constructor(public dialog: MatDialog) {}

//   openDetails(worker: any) {
//     this.dialog.open(this.detailsModal, {
//       data: worker,
//       disableClose: true,
//     });
//   }

//   closeModal() {
//     this.dialog.closeAll();
//   }
//   toggleAll(event: any) {
//     const checked = event.target.checked;
//     this.workers.forEach((worker) => (worker.selected = checked));
//   }
//   get paginatedWorkers() {
//     const start = (this.currentPage - 1) * this.pageSize;
//     const end = start + this.pageSize;
//     return this.workers.slice(start, end);
//   }

//   goToPreviousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   goToNextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }
// }

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

export interface Worker {
  selected: boolean;
  image: string;
  name: string;
  email: string;
  category: string;
  carType: string;
  plateNumber: string;
  address: string;
  carPark: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() workers: Worker[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() paginatedWorkers: Worker[] = [];
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() modalTemplate!: TemplateRef<any>;

  @Output() workerSelected = new EventEmitter<Worker>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() detailsClick = new EventEmitter<Worker>();

  selectedWorker!: Worker | null;

  constructor() {}

  ngOnInit(): void {}

  toggleAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.paginatedWorkers.forEach((worker) => (worker.selected = isChecked));
  }

  openDetails(worker: Worker) {
    this.selectedWorker = worker;
    this.detailsClick.emit(worker);
  }

  closeModal() {
    this.selectedWorker = null;
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}
