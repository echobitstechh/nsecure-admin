import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tworker-form',
  templateUrl: './tworker-form.component.html',
  styleUrls: ['./tworker-form.component.css'],
})
export class TworkerFormComponent implements OnInit {
  @Input() isUpdate: boolean = false;

  tworkerForm!: FormGroup;
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
    this.tworkerForm = this.fb.group({
      title: ['Mr', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      role: ['field agent', Validators.required],
      address: ['', Validators.required],
      park: ['mangu park', Validators.required],
      plateNumber: ['', Validators.required],
      category: ['', Validators.required],
      carType: ['toyota', Validators.required],
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
      this.showSuccessModal('Transport Worker Updated successfully.');
    } else {
      // Create admin api call
      this.showSuccessModal('Transport Worker Created successfully.');
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
