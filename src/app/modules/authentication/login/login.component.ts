import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  checkBox: boolean = false;

  constructor(private lf: FormBuilder, private router: Router, private http: HttpClient) {
    // this.loginForm = new FormGroup()
  }

  ngOnInit(): void {
    this.loginForm = this.lf.group({
      email: [
        '',
        [Validators.required, this.usernameOrEmailValidator],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const storedDetails = JSON.parse(
      localStorage.getItem('loginDetails') || '{}'
    );
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
    if(this.loginForm.valid){
      const loginData = this.loginForm.value;
      this.http.post('http://localhost:3000/api/v1/admin/signin', loginData).subscribe((response:any) =>{
        console.log(response)
        if (response) {
          const token = response.token;
          // const authUser = response.data?.user;
          // console.log("auth",authUser)
          if (token) {
            window.localStorage.setItem("token", token);
            // window.localStorage.setItem("authUser", JSON.stringify(authUser));

            this.router.navigate(['/dashboard']);

          } else {
            this.router.navigate(["/login"]);


          }
        } else {
          console.log("Unauthorized")
        }
      })

    }


  //   if (this.loginForm.valid) {
  //     if (this.checkBox) {
  //       localStorage.setItem(
  //         'loginDetails',
  //         JSON.stringify(this.loginForm.value)
  //       );
  //     } else {
  //       localStorage.removeItem('loginDetails');
  //     }
  //     this.router.navigate(['/dashboard']);
  //   }
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
