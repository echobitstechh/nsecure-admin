import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountActionModalComponent } from '../../../../shared/components/account-action-modal/account-action-modal.component';
import { ApiService } from '../../../../services/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-management-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent implements OnInit {
  admin: any = {};
  adminId: string = '';
  error = '';
  bsModalRef: BsModalRef | undefined;

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.adminId = params['adminId'];
      this.loadOneAdmin(this.adminId);
    });
  }

  onEditClick(): void {
    this.router.navigate(['/management/admin/update-admin'], {
      queryParams: { adminId: this.admin.adminId },
    });
  }

  loadOneAdmin(adminId: string): void {
    this.apiService.getAnAdmin(adminId).subscribe(
      (response) => {
        this.admin = response.data;
        console.log('admin:', this.admin);
      },
      (error) => {
        this.error = 'Error fetching admin';
        console.error('Error fetching admin', error);
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
        this.processAction(actionType, this.adminId);
      }
    });
  }
  // user: any, password: string
  processAction(actionType: string, adminId: string): void {
    if (actionType === 'delete') {
      //api call for deletion
      this.apiService.deleteAdmin(adminId).subscribe(
        () => {
          // If the API call is successful, show the success modal
          this.showSuccessModal('Account Deleted successfully.');
          this.router.navigate(['/management/admin/admins-list']);
        }
        //   (error) => {
        //     console.error('');
        //   }
      );
    } else if (actionType === 'deactivate') {
      //api call for deactivation
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
      // reload: true,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
      initialState,
    });
  }
}
