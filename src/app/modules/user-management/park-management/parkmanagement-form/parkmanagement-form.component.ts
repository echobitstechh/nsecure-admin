import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fieldagent-form',
  templateUrl: './parkmanagement-form.component.html',
  styleUrls: ['./parkmanagement-form.component.css'],
})
export class ParkmanagementFormComponent implements OnInit {
  loading: boolean = false;
  parkmanagementForm!: FormGroup;
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
  }

  initializeForm(): void {
    this.parkmanagementForm = this.fb.group({
      parkName: ['', Validators.required],
      location: ['', Validators.required],
      transportCategoriesCovered: ['', [Validators.required, Validators.email]],
      chairman: ['', Validators.required],
      currentNoOfWorker: ['', Validators.required],
      currentNoOfAgent: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      govtAllocatedNumber: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.loading = true;
    console.log('Form submitted', this.parkmanagementForm.value); // Log to check
    const formValues = this.parkmanagementForm.value;
    this.apiService.createPark(formValues).subscribe((response) => {
      if (response.status === 201) {
        this.loading = false;
        this.showSuccessModal('Field Agent Created successfully.');
      } else {
      }
    });
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
