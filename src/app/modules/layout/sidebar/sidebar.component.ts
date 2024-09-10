import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../../../services/auth.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() showSidebarAndHeader: boolean = false;
  isManagementOpen = false;

  ngOnInit(): void {}
  bsModalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService
  ) {}

  toggleManagement() {
    this.isManagementOpen = !this.isManagementOpen;
  }
  openConfirmDialog() {
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent);
    const modalComponent = this.bsModalRef.content as ConfirmDialogComponent;

    modalComponent.title = 'Log Out';
    modalComponent.message = 'Are you sure you want to log out?';
    modalComponent.confirmText = 'Log Out';
    modalComponent.cancelText = 'Cancel';
    modalComponent.confirmBtnClass = 'btn btn-danger';
    modalComponent.cancelBtnClass = 'btn btn-secondary';

    modalComponent.confirmEvent.subscribe(() => {
      this.authService.logOut();
    });
  }
}
