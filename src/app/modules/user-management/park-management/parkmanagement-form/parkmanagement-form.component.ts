import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SuccessDialogComponent } from '../../../../shared/components/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.parkmanagementForm = this.fb.group({
      parkName: ['', Validators.required],
      location: ['', Validators.required],
      transportCategoriesCovered: this.fb.array([], Validators.required),
      chairman: ['', Validators.required],
      currentNoOfWorker: ['', Validators.required],
      currentNoOfAgent: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      govtAllocatedNumber: ['', Validators.required],
    });
  }

  onTransportCategoriesCoveredArrayChange(event: any): void {
    const transportCategoriesCoveredArray = this.parkmanagementForm.get(
      'transportCategoriesCovered'
    ) as FormArray;

    if (event.target.checked) {
      transportCategoriesCoveredArray.push(this.fb.control(event.target.value));
    } else {
      const index = transportCategoriesCoveredArray.controls.findIndex(
        (x) => x.value === event.target.value
      );
      transportCategoriesCoveredArray.removeAt(index);
    }
  }

  onSubmit(): void {
    this.loading = true;
    console.log('Form submitted', this.parkmanagementForm.value); // Log to check
    const formValues = this.parkmanagementForm.value;
    this.apiService.createPark(formValues).subscribe(
      (response) => {
        if (response.status === 201) {
          this.loading = false;
          this.showSuccessModal('Park Created successfully.');
          this.router.navigate(['/management/park-management/parks']);
        } else {
          this.loading = false;
        }
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
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
