import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superagent-form',
  templateUrl: './superagent-form.component.html',
  styleUrls: ['./superagent-form.component.css'],
})
export class SuperagentFormComponent implements OnInit {
  @Input() isUpdate: boolean = false;
  loading: boolean = false;
  superagentForm!: FormGroup;
  agentId!: string;
  role!: string;
  bsModalRef: BsModalRef | undefined;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.route.queryParams.subscribe((params) => {
      this.agentId = params['agentId'];
      this.role = params['role'];
    });
    if (this.isUpdate && this.agentId) {
      // this.fetchAgentDetails(this.agentId);
    }
  }

  initializeForm(): void {
    this.superagentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required],
      address: ['', Validators.required],
      parkId: ['', Validators.required],
      supervisorId: [''],
    });

    // if (!this.isUpdate || this.role === 'fieldAgent') {
    //   this.fieldagentForm
    //     .get('supervisorId')
    //     ?.setValidators(Validators.required);
    // }
  }

  // fetchAgentDetails(id: number): void {
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
    this.loading = true;
    console.log('Form submitted', this.superagentForm.value); // Log to check
    if (!this.isUpdate && this.superagentForm.invalid) {
      this.loading = false;
      return;
    }

    const formValues = this.superagentForm.value;
    if (this.isUpdate) {
      this.apiService
        .updateAgent(
          formValues.email,
          formValues.firstName,
          formValues.lastName,
          formValues.role,
          formValues.phoneNumber,
          formValues.address,
          formValues.parkId,
          formValues.supervisorId,
          this.agentId
        )
        .subscribe(() => {
          console.log('Updating admin with ID:', this.agentId);
          this.showSuccessModal('Field Agent Updated successfully.');
        });
      // Update admin api call
    } else {
      // Create admin api call
      this.apiService
        .createAgent(
          formValues.email,
          formValues.firstName,
          formValues.lastName,
          formValues.role,
          formValues.phoneNumber,
          formValues.address,
          formValues.parkId,
          formValues.supervisorId
        )
        .subscribe(() => {
          this.showSuccessModal('Field Agent Created successfully.');
        });
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
