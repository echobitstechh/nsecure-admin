import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-management-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent implements OnInit {
  admin: any = {};
  error = '';

  ngOnInit(): void {}

  constructor(private apiService: ApiService) {}

  loadOneProduct(): void {
    this.apiService.getAnAdmin().subscribe(
      (response) => {
        this.admin = response;
        console.log('admin:', this.admin);
      },
      (error) => {
        this.error = 'Error fetching product';
        console.error('Error fetching product', error);
      }
    );
  }
}
