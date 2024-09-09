import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountActionModalComponent } from '../../../../shared/components/account-action-modal/account-action-modal.component';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-management-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent {
  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  openDialog(actionType: string, user: any): void {
    const dialogRef = this.dialog.open(AccountActionModalComponent, {
      width: '400px',
      data: {
        title:
          actionType === 'delete'
            ? `Delete ${user.name}'s account`
            : `Deactivate ${user.name}'s account`,
        message:
          actionType === 'delete'
            ? `Are you sure you want to delete ${user.name}'s account? This action cannot be undone.`
            : `Are you sure you want to deactivate ${user.name}'s account?`,
        actionType: actionType,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.processAction(actionType, user, result);
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
