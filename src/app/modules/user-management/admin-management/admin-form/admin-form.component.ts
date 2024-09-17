// import { Component, OnInit, Input } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ApiService } from '../../../../services/api.service';
// import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

// @Component({
//   selector: 'app-admin-form',
//   templateUrl: './admin-form.component.html',
//   styleUrls: ['./admin-form.component.css'],
// })
// export class AdminFormComponent implements OnInit {
//   @Input() isUpdate: boolean = false;

//   adminForm!: FormGroup;
//   bsModalRef: BsModalRef | undefined;

//   constructor(
//     private fb: FormBuilder,
//     private apiService: ApiService,
//     private modalService: BsModalService
//   ) {}

//   ngOnInit(): void {
//     this.initializeForm();

//     // if (this.isUpdate) {
//     //   this.fetchAdminDetails(); // Fetch details if in update mode
//     // }
//   }

//   initializeForm(): void {
//     this.adminForm = this.fb.group({
//       title: ['Mr', Validators.required],
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phoneNumber: ['', Validators.required],
//       role: ['Admin', Validators.required],
//       accessLevels: this.fb.group({
//         dashboard: ['Full access'],
//         analytics: ['Full access'],
//         enumerator: ['Full access'],
//         taxpayers: ['Full access'],
//         auditLog: ['Full access'],
//         report: ['Full access'],
//         adminLists: ['Full access'],
//         eServices: ['Full access'],
//       }),
//     });
//   }

//   // fetchAdminDetails(id: number): void {
//   //   this.apiService.getAdminById(id).subscribe((admin) => {
//   //     this.adminForm.patchValue({
//   //       title: admin.title,
//   //       name: admin.name,
//   //       email: admin.email,
//   //       phoneNumber: admin.phoneNumber,
//   //       role: admin.role,
//   //       accessLevels: admin.accessLevels,
//   //     });
//   //   });
//   // }

//   onSubmit(): void {
//     if (this.isUpdate) {
//       // Update admin api call
//       this.apiService.updateAdmin;
//       this.showSuccessModal('Admin Updated successfully.', '');
//     } else {
//       // Create admin api call
//       this.apiService.createAdmin;
//       this.showSuccessModal(
//         'Admin Created successfully.',
//         "A verification email has been sent to the new admin's address"
//       );
//     }
//   }

//   showSuccessModal(message: string, subMessage: string): void {
//     const initialState = {
//       // title: title,
//       message: message,
//       reload: true,
//       subMessage: subMessage,
//     };
//     this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
//       initialState,
//     });
//   }
// }

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
  @Input() adminId: string | undefined; // For update mode

  adminForm!: FormGroup;
  bsModalRef: BsModalRef | undefined;
  loading: boolean = true;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    if (this.isUpdate && this.adminId) {
      this.fetchAdminDetails(this.adminId); // Fetch details if in update mode
    }
  }

  initializeForm(): void {
    this.adminForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      role: ['Admin', Validators.required],
      accessLevels: this.fb.group({
        dashboard: [true, Validators.required],
        analytics: [true, Validators.required],
        enumerator: [true, Validators.required],
        taxpayers: [true, Validators.required],
        auditLog: [true, Validators.required],
        report: [true, Validators.required],
        adminLists: [true, Validators.required],
        eServices: [true, Validators.required],
      }),
    });
  }

  fetchAdminDetails(id: string): void {
    // this.apiService.getAdminById(id).subscribe((admin) => {
    //   this.adminForm.patchValue({
    //     firstName: admin.firstName,
    //     lastName: admin.lastName,
    //     email: admin.email,
    //     phoneNumber: admin.phoneNumber,
    //     role: admin.role,
    //     accessLevels: {
    //       dashboard: admin.dashboardAccess,
    //       analytics: admin.analyticsAccess,
    //       enumerator: admin.enumeratorAccess,
    //       taxpayers: admin.taxpayersAccess,
    //       auditLog: admin.auditLogAccess,
    //       report: admin.reportAccess,
    //       adminLists: admin.adminUsersAccess,
    //       eServices: admin.eServicesAccess,
    //     },
    //   });
    // });
  }

  onSubmit(): void {
    if (this.adminForm.invalid) {
      return;
    }

    const formValues = this.adminForm.value;

    if (this.isUpdate && this.adminId) {
      this.loading = true;
      this.apiService
        .updateAdmin(
          formValues.email,
          formValues.firstName,
          formValues.lastName,
          formValues.role,
          formValues.phoneNumber,
          formValues.accessLevels.dashboard,
          formValues.accessLevels.enumerator,
          formValues.accessLevels.taxpayers,
          formValues.accessLevels.auditLog,
          formValues.accessLevels.analytics,
          formValues.accessLevels.report,
          formValues.accessLevels.adminLists,
          formValues.accessLevels.eServices,
          this.adminId
        )
        .subscribe(() => {
          this.showSuccessModal('Admin Updated successfully.', '');
        });
      this.loading = false;
    } else {
      this.loading = true;
      this.apiService
        .createAdmin(
          formValues.email,
          formValues.firstName,
          formValues.lastName,
          formValues.role,
          formValues.phoneNumber,
          formValues.accessLevels.dashboard,
          formValues.accessLevels.enumerator,
          formValues.accessLevels.taxpayers,
          formValues.accessLevels.auditLog,
          formValues.accessLevels.analytics,
          formValues.accessLevels.report,
          formValues.accessLevels.adminLists,
          formValues.accessLevels.eServices
        )
        .subscribe(() => {
          this.showSuccessModal(
            'Admin Created successfully.',
            "A verification email has been sent to the new admin's address"
          );
        });
      this.loading = false;
    }
  }

  showSuccessModal(message: string, subMessage: string): void {
    const initialState = {
      message: message,
      reload: true,
      subMessage: subMessage,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
      initialState,
    });
  }
}
