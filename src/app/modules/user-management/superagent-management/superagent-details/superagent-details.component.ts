import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountActionModalComponent } from '../../../../shared/components/account-action-modal/account-action-modal.component';
import { ApiService } from '../../../../services/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';

@Component({
  selector: 'app-management-details',
  templateUrl: './superagent-details.component.html',
  styleUrls: ['./superagent-details.component.css'],
})
export class SuperagentDetailsComponent implements OnInit {
  superagent: any = {};
  error = '';
  bsModalRef: BsModalRef | undefined;
  ngOnInit(): void {
    this.loadOneSuperAgent();
  }
  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private modalService: BsModalService
  ) {}

  loadOneSuperAgent(): void {
    // this.apiService.getAnAdmin().subscribe(
    //   (response) => {
    //     this.fieldagent = response;
    //     console.log('admin:', this.fieldagent);
    //   },
    //   (error) => {
    //     this.error = 'Error fetching fieldagent';
    //     console.error('Error fetching fieldagent', error);
    //   }
    // );
  }

  openDialog(actionType: string): void {
    console.log('Opening dialog...');
    const dialogRef = this.dialog.open(AccountActionModalComponent, {
      width: '770px',
      data: {
        title:
          actionType === 'delete'
            ? `Delete Super Agent Details`
            : `Deactivate ${this.superagent.name}'s account`,
        message:
          actionType === 'delete'
            ? `Do you still want to proceed?`
            : `Deactivating this super agent revokes their login credentials.`,
        actionType: actionType,
        deleteText: 'Field Agent',
        deleteMessage:
          'All the personal data will be deleted for the following user.',
        adminImage: this.superagent.image,
        adminName: this.superagent.name,
        confirmText: actionType === 'delete' ? 'Confirm Delete' : 'Deactivate',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed', result);
      if (result) {
        this.processAction(actionType, this.superagent, result);
      }
    });
  }

  processAction(actionType: string, user: any, password: string): void {
    if (actionType === 'delete') {
      //api call for deletion
      this.showSuccessModal('Account Deleted successfully.');
      //   },
      //   (error) => {
      //     console.error('');
      //   }
      // );
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
      reload: true,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
      initialState,
    });
  }
}
