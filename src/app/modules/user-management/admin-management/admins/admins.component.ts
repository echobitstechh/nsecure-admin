import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../../services/api.service';
import { Router } from '@angular/router';

interface ListAdmin {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  adminId?: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css',
})
export class AdminsComponent implements OnInit {
  closeModal() {
    this.dialog.closeAll();
  }
  admins: ListAdmin[] = [
    {
      firstName: 'Silifah',
      lastName: 'Admin',
      email: 'Email@email.com',
      role: 'super admin',
    },
    {
      firstName: 'Super',
      lastName: 'Admin',
      email: 'email02@email.com',
      role: 'super admin',
    },
  ];
  loading = false;
  error = '';

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) {}

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

  onAdminClick(admin: ListAdmin): void {
    this.router.navigate(['/management/admin/admin-detail'], {
      queryParams: { adminId: admin.adminId },
    });
  }
}
// admin: ListAdmin;
