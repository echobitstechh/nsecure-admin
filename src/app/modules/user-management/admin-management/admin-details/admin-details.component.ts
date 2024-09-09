import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountActionModalComponent } from '../../../../shared/components/account-action-modal/account-action-modal.component';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-management-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent implements OnInit {
  admin: any = {};
  error = '';

  ngOnInit(): void {}
  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  loadOneAdmin(): void {
    this.apiService.getAnAdmin().subscribe(
      (response) => {
        this.admin = response;
        console.log('admin:', this.admin);
      },
      (error) => {
        this.error = 'Error fetching product';
        console.error('Error fetching product', error);
      }
    );
  }

  openDialog(actionType: string): void {
    console.log('Opening dialog...');
    const dialogRef = this.dialog.open(AccountActionModalComponent, {
      width: '400px',
      data: {
        title:
          actionType === 'delete'
            ? `Delete Admin's account`
            : `Deactivate Admin's account`,
        message:
          actionType === 'delete'
            ? `Are you sure you want to delete ${this.admin.name}'s account? This action cannot be undone.`
            : `Are you sure you want to deactivate ${this.admin.name}'s account?`,
        actionType: actionType,
        deleteText: 'Admin',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed', result);
      if (result) {
        this.processAction(actionType, this.admin, result);
      }
    });
  }

  processAction(actionType: string, user: any, password: string): void {
    // if (actionType === 'delete') {
    //   this.apiService.deleteUser(user.id, password).subscribe(
    //     (response) => {
    //       console.log('User deleted successfully');
    //     },
    //     (error) => {
    //       console.error('Error deleting user');
    //     }
    //   );
    // } else if (actionType === 'deactivate') {
    //   this.v.deactivateUser(user.id, password).subscribe(
    //     (response) => {
    //       console.log('User deactivated successfully');
    //     },
    //     (error) => {
    //       console.error('Error deactivating user');
    //     }
    //   );
    // }
  }
}
