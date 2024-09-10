import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  @Input() isUpdate: boolean = false;

  adminForm!: FormGroup;
  bsModalRef: BsModalRef | undefined;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    // if (this.isUpdate) {
    //   this.fetchAdminDetails(); // Fetch details if in update mode
    // }
  }

  initializeForm(): void {
    this.adminForm = this.fb.group({
      title: ['Mr', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      role: ['Admin', Validators.required],
      accessLevels: this.fb.group({
        dashboard: ['Full access'],
        analytics: ['Full access'],
        enumerator: ['Full access'],
        taxpayers: ['Full access'],
        auditLog: ['Full access'],
        report: ['Full access'],
        adminLists: ['Full access'],
        eServices: ['Full access'],
      }),
    });
  }

  // fetchAdminDetails(id: number): void {
  //   this.apiService.getAdminById(id).subscribe((admin) => {
  //     this.adminForm.patchValue({
  //       title: admin.title,
  //       name: admin.name,
  //       email: admin.email,
  //       phoneNumber: admin.phoneNumber,
  //       role: admin.role,
  //       accessLevels: admin.accessLevels,
  //     });
  //   });
  // }

  onSubmit(): void {
    if (this.isUpdate) {
      // Update admin api call
      this.showSuccessModal('Admin Updated successfully.', '');
    } else {
      // Create admin api call
      this.showSuccessModal(
        'Admin Created successfully.',
        "A verification email has been sent to the new admin's address"
      );
    }
  }

  showSuccessModal(message: string, subMessage: string): void {
    const initialState = {
      // title: title,
      message: message,
      reload: true,
      subMessage: subMessage,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
      initialState,
    });
  }
}
