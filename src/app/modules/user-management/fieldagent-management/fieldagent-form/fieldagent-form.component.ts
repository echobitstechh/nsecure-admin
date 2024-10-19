import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fieldagent-form',
  templateUrl: './fieldagent-form.component.html',
  styleUrls: ['./fieldagent-form.component.css'],
})
export class FieldagentFormComponent implements OnInit {
  @Input() isUpdate: boolean = false;
  loading: boolean = false;
  fieldagentForm!: FormGroup;
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
    this.fieldagentForm = this.fb.group({
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
    console.log('Form submitted', this.fieldagentForm.value); // Log to check
    if (!this.isUpdate && this.fieldagentForm.invalid) {
      this.loading = false;
      return;
    }

    const formValues = this.fieldagentForm.value;
    if (this.isUpdate) {
      this.apiService.updateAgent(formValues, this.agentId).subscribe(() => {
        console.log('Updating admin with ID:', this.agentId);
        this.showSuccessModal('Field Agent Updated successfully.');
      });
      // Update admin api call
    } else {
      // Create admin api call
      this.apiService.createAgent(formValues).subscribe(() => {
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
