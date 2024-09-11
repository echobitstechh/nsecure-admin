import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-admin-create-password',
  templateUrl: './admin-create-password.component.html',
  styleUrls: ['./admin-create-password.component.css'],
})
export class AdminCreatePasswordComponent implements OnInit {
  passwordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

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

  // Submit method
  onSubmit(): void {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      return;
    }

    // Perform further actions like sending data to the server
    console.log('Password form submitted', this.passwordForm.value);
  }
}
