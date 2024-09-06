import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  @Input() isUpdate: boolean = false;
  @Input() adminId: number | null = null;

  adminForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.initializeForm();

    // if (this.isUpdate && this.adminId) {
    //   this.fetchAdminDetails(this.adminId); // Fetch details if in update mode
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
    // if (this.isUpdate && this.adminId) {
    //   // Update admin
    //   this.adminService
    //     .updateAdmin(this.adminId, this.adminForm.value)
    //     .subscribe((response) => {
    //       console.log('Admin updated', response);
    //     });
    // } else {
    //   // Create admin
    //   this.adminService
    //     .createAdmin(this.adminForm.value)
    //     .subscribe((response) => {
    //       console.log('Admin created', response);
    //     });
    // }
  }
}
