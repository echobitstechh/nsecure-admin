import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css',
})
export class AdminsComponent implements OnInit {
  closeModal() {
    this.dialog.closeAll();
  }
  admins = [];
  loading = false;
  error = '';

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.loading = true;
    this.apiService.getAdmins().subscribe(
      (response) => {
        this.loading = false;
        this.admins = response.data;
      },
      (error) => {
        this.loading = false;
        this.error = 'Error fetching admins';
        console.error('Error fetching admins', error);
      }
    );
  }
}
