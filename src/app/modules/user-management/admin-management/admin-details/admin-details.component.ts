import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountActionModalComponent } from '../../../../shared/components/account-action-modal/account-action-modal.component';
import { ApiService } from '../../../../services/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';

@Component({
  selector: 'app-management-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent implements OnInit {
  admin: any = {};
  error = '';
  bsModalRef: BsModalRef | undefined;
  ngOnInit(): void {}
  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private modalService: BsModalService
  ) {}

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
      width: '770px',
      data: {
        title:
          actionType === 'delete'
            ? `Delete Admin's Details`
            : `Deactivate ${this.admin.name}'s account`,
        message:
          actionType === 'delete'
            ? `Do you still want to proceed?`
            : `Deactivating this admin user revokes their login credentials.`,
        actionType: actionType,
        deleteText: 'Admin',
        deleteMessage:
          'All the  personal data will be deleted for the following user.',
        adminImage: this.admin.image,
        adminName: this.admin.name,
        confirmText: actionType === 'delete' ? 'Confirm Delete' : 'Deactivate',
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
    if (actionType === 'delete') {
      // this.apiService.deleteUser(user.id, password).subscribe(
      //   (response) => {
      //     console.log('User deleted successfully');
      this.showSuccessModal('Account Deleted successfully.');
      //   },
      //   (error) => {
      //     console.error('Error deleting user');
      //   }
      // );
    } else if (actionType === 'deactivate') {
      // this.deactivateUser(user.id, password).subscribe(
      //   (response) => {
      //     console.log('User deactivated successfully');
      this.showSuccessModal('Account Deactivated successfully.');
      //   },
      //   (error) => {
      //     console.error('Error deactivating user');
      //   }
      // );
    }
  }

  showSuccessModal(message: string): void {
    const initialState = {
      // title: title,
      message: message,
      reload: true,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
      initialState,
    });
  }
}
