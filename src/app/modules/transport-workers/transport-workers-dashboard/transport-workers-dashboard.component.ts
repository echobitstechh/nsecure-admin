import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-transport-workers-dashboard',
  templateUrl: './transport-workers-dashboard.component.html',
  styleUrl: './transport-workers-dashboard.component.css',
})
export class TransportWorkersDashboardComponent implements OnInit {
  constructor(public dialog: MatDialog, private apiService: ApiService) {}
  workers = [];
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loadTransportWorkers();
  }

  loadTransportWorkers(): void {
    this.loading = true;
    this.apiService.getTransportWorkers().subscribe(
      (response) => {
        this.loading = false;
        this.workers = response.drivers;
        console.log('workers:', this.workers);
      },
      (error) => {
        this.loading = false;
        this.error = 'Error fetching transport workers';
        console.error('Error fetching transport workers', error);
      }
    );
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
