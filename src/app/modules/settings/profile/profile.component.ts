import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})

export class ProfileComponent implements OnInit {
userProfileFrom:FormGroup;
isEditing:boolean = false;
adminId = this.authService.getUserId()
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
  ) {
    this.isEditing = false;
    this.userProfileFrom = fb.group({
      firstName:['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
     this.loadUserProfile()
  }

  loadUserProfile() {
    const userId = this.authService.getUserId()
    this.apiService.getProfile(userId!).subscribe((response:any)=>{
      if (response.adminId !== null){
        this.userProfileFrom.patchValue({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        password: response.data.password,
        image: response.data.image
      })
        this.isEditing = false;
        this.userProfileFrom.disable()
      }
    })
  }

  onSubmit(){
    if (this.userProfileFrom.valid) {
      this.apiService.updateUserProfile(this.adminId, this.userProfileFrom.value).subscribe(
        response => {
          console.log('User profile updated successfully', response);
          this.isEditing = false;
          this.loadUserProfile();
        },
        error => {
          console.error('Error updating user profile', error);
        }
      );
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.loadUserProfile();
    }else {
      this.userProfileFrom.enable()
    }
  }
}
