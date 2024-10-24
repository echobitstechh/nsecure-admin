import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  @Input() isUpdate: boolean = false;
  @Input() adminId: string | undefined;
  adminForm!: FormGroup;
  bsModalRef: BsModalRef | undefined;
  loading: boolean = false;
  imagePreview: string | ArrayBuffer | null = null;
  selectedImageFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.route.queryParams.subscribe((params) => {
      this.adminId = params['adminId'];
    });
    if (this.isUpdate && this.adminId) {
      this.fetchAdminDetails(this.adminId);
    }
  }

  initializeForm(): void {
    this.adminForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required],
      image: ['', Validators.required],
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
    this.apiService.getAnAdmin(id).subscribe((admin) => {
      this.adminForm.patchValue({
        firstName: admin.data.firstName,
        lastName: admin.data.lastName,
        email: admin.data.email,
        phoneNumber: admin.data.phoneNumber,
        role: admin.data.role,
        accessLevels: {
          dashboard: admin.data.dashboardAccess,
          analytics: admin.data.analyticsAccess,
          enumerator: admin.data.enumeratorAccess,
          taxpayers: admin.data.taxpayersAccess,
          auditLog: admin.data.auditLogAccess,
          report: admin.data.reportAccess,
          adminLists: admin.data.adminUsersAccess,
          eServices: admin.data.eServicesAccess,
        },
      });
    });
  }

  // onFileSelected(event: Event): void {
  //   const fileInput = event.target as HTMLInputElement;
  //   if (fileInput.files && fileInput.files.length > 0) {
  //     const file = fileInput.files[0];
  //     this.selectedImageFile = file;
  //     this.adminForm.patchValue({ image: file });

  //     // Generate image preview and convert to base64
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.imagePreview = reader.result;
  //       this.adminForm.patchValue({ image: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.selectedImageFile = file;

      // Assuming the backend or upload service will handle the actual file upload.
      // You can just patch the file name or URL to the form.
      this.adminForm.patchValue({ image: file.name });

      // Optionally, you can still show a preview if needed
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    this.loading = true;
    if (!this.isUpdate && this.adminForm.invalid) {
      this.loading = false;
      return;
    }
    this.loading = true;
    const formValues = this.adminForm.value;

    if (this.isUpdate && this.adminId) {
      console.log('Submitting adminId:', this.adminId);
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
          this.adminId,
          formValues.image
        )
        .subscribe(() => {
          console.log('Updating admin with ID:', this.adminId);
          this.showSuccessModal('Admin Updated successfully.', '');
        });
    } else {
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
          formValues.accessLevels.eServices,
          formValues.image
        )
        .subscribe(() => {
          this.showSuccessModal(
            'Admin Created successfully.',
            "A verification email has been sent to the new admin's address"
          );
        });
    }
    this.loading = false;
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
