import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SuccessDialogComponent } from '../../../shared/components/success-dialog/success-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-password',
  templateUrl: './admin-create-password.component.html',
  styleUrls: ['./admin-create-password.component.css'],
})
export class AdminCreatePasswordComponent implements OnInit {
  passwordForm!: FormGroup;
  submitted = false;
  bsModalRef: BsModalRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            this.lowercaseValidator(),
            this.numericValidator(),
            this.specialCharacterValidator(),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.matchPasswords('password', 'confirmPassword'),
      }
    );
  }

  // Custom Validator for lowercase
  lowercaseValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasLowercase = /[a-z]/.test(control.value);
      return hasLowercase ? null : { lowercase: true };
    };
  }

  // Custom Validator for numeric characters
  numericValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNumeric = /\d/.test(control.value);
      return hasNumeric ? null : { numeric: true };
    };
  }

  // Custom Validator for special characters
  specialCharacterValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);
      return hasSpecialCharacter ? null : { specialCharacter: true };
    };
  }

  // Custom Validator for matching passwords
  matchPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['mismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null;
    };
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      this.submitted = false;
      return;
    }
    this.showSuccessModal();
    this.submitted = false;
    this.router.navigate(['/login']);
    console.log('Password form submitted', this.passwordForm.value);
  }

  showSuccessModal(): void {
    const initialState = {
      message: 'Password Successfully Set.',
      subMessage:
        'Your password has been successfully set. You can now login with your new credentials.',
      buttonMessage: 'Login',
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponent, {
      initialState,
    });
  }
}
