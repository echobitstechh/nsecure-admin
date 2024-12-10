import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  checkBox: boolean = false;
  errorMessage: string = '';

  loading: boolean = false;
  loginMessage = '';
  loginMessageType = '';
  loginAlertTimeout: any;

  constructor(
    private lf: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.lf.group({
      email: ['', [Validators.required, this.usernameOrEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const storedDetails = JSON.parse(
      localStorage.getItem('loginDetails') || '{}'
    );
    if (storedDetails && storedDetails.email && storedDetails.password) {
      this.loginForm.patchValue(storedDetails);
      this.checkBox = true;
    }
  }

  ngOnDestroy(): void {}

  onSubmit() {
    this.loading = true;
    if (this.loginForm.valid) {
      if (this.checkBox) {
        localStorage.setItem(
          'loginDetails',
          JSON.stringify(this.loginForm.value)
        );
      } else {
        localStorage.removeItem('loginDetails');
      }

      const { email, password } = this.loginForm.value;
      this.apiService.login(email, password).subscribe(
        (response) => {
          console.log('response from api is: ', response);
          console.log('response from api is: ', response);
          if (response.message === 'Login successful') {
            this.showLoginAlert('Login successful', 'success');
            console.log('Login success', response);
            this.authService.storeJwtToken(response.token);
            this.authService.storeRefreshToken(response.refreshToken);
            this.authService.storeUserId(response.admin.adminId);
            this.loading = false;
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Access denied. Not an admin.', response.message);
            this.showLoginAlert(
              'Failed to login: ' +
                (response.message ?? 'incorrect username or password'),
              'danger'
            );
          }
          this.loading = false;
        },
        (error) => {
          console.log('Error response from api: ', error.error);
          this.errorMessage =
            error.error.error ||
            error.error ||
            'An error occurred during login.';

          // this.errorMessage = error.error.message || error.error.error || 'An error occurred during login.';

          this.showLoginAlert(this.errorMessage, 'danger');
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
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

  showLoginAlert(message: string, type: string) {
    // Clear any existing timeout to reset the timer
    if (this.loginAlertTimeout) {
      clearTimeout(this.loginAlertTimeout);
    }

    // Set the login message and type
    this.loginMessage = message;
    this.loginMessageType = type;

    // Set a timeout to clear the login message after 5 seconds (5000 ms)
    this.loginAlertTimeout = setTimeout(() => {
      this.loginMessage = '';
    }, 5000);
  }
}
