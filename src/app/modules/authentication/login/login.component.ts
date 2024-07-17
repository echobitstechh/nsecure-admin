import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  checkBox: boolean = false;

  constructor(private lf: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.lf.group({
      usernameOrEmail: [
        '',
        [Validators.required, this.usernameOrEmailValidator],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const storedDetails = JSON.parse(localStorage.getItem('login') || '{}');
    if (
      storedDetails &&
      storedDetails.usernameOrEmail &&
      storedDetails.password
    ) {
      this.loginForm.patchValue(storedDetails);
      this.checkBox = true;
    }
  }

  ngOnDestroy(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.checkBox) {
        localStorage.setItem('login', JSON.stringify(this.loginForm.value));
      } else {
        localStorage.removeItem('login');
      }
      console.log(this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }
  }

  usernameOrEmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return { required: true };
    }
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    const isValidUsername = /^[a-zA-Z]+$/.test(value);

    if (!isValidEmail && !isValidUsername) {
      return { invalidUsernameOrEmail: true };
    }
    return null;
  }

  onCheckBoxChange(event: Event) {
    this.checkBox = (event.target as HTMLInputElement).checked;
  }
}
