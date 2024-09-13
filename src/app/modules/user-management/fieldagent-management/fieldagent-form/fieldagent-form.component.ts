import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-fieldagent-form',
  templateUrl: './fieldagent-form.component.html',
  styleUrls: ['./fieldagent-form.component.css'],
})
export class FieldagentFormComponent implements OnInit {
  @Input() isUpdate: boolean = false;

  fieldagentForm!: FormGroup;
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
    this.fieldagentForm = this.fb.group({
      title: ['Mr', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      role: ['field agent', Validators.required],
      park: ['mangu park', Validators.required],
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
      this.showSuccessModal('Field Agent Updated successfully.');
    } else {
      // Create admin api call
      this.showSuccessModal('Field Agent Created successfully.');
    }
  }

  showSuccessModal(message: string): void {
    const initialState = {
      message: message,
      reload: true,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
      initialState,
    });
  }
}
