// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css'],
// })
// export class ForgotPasswordComponent implements OnInit {
//   forgotPasswordForm!: FormGroup;
//   otpSent: boolean = false;

//   constructor(private fpf: FormBuilder) {}

//   ngOnInit(): void {
//     this.forgotPasswordForm = this.fpf.group({
//       email: ['', [Validators.required, Validators.email]],
//       otp: ['', Validators.required],
//     });
//   }

//   onSendMail() {
//     if (this.forgotPasswordForm.get('email')?.valid) {
//       this.otpSent = true;
//       console.log('OTP sent to:', this.forgotPasswordForm.get('email')?.value);
//       this.forgotPasswordForm.get('otp')?.reset();
//     }
//   }

//   onConfirm() {
//     if (this.forgotPasswordForm.get('otp')?.valid) {
//       console.log('OTP confirmed:', this.forgotPasswordForm.get('otp')?.value);
//     }
//   }

//   onSubmit() {
//     if (this.forgotPasswordForm.valid) {
//       if (this.otpSent) {
//         this.onConfirm();
//       } else {
//         this.onSendMail();
//       }
//     }
//   }
// }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  forgotPasswordForm!: FormGroup;
  otpSent: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: [''],
    });
  }

  ngOnDestroy(): void {}

  onSendMail() {
    if (this.forgotPasswordForm.get('email')?.valid) {
      this.otpSent = true;
      console.log('OTP sent to:', this.forgotPasswordForm.get('email')?.value);
      this.forgotPasswordForm.get('otp')?.setValidators([Validators.required]);
      this.forgotPasswordForm.get('otp')?.updateValueAndValidity();
    }
  }

  onConfirm() {
    if (this.forgotPasswordForm.get('otp')?.valid) {
      console.log('OTP confirmed:', this.forgotPasswordForm.get('otp')?.value);
    }
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      if (this.otpSent) {
        this.onConfirm();
      } else {
        this.onSendMail();
      }
    }
  }
}
