import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  closeModal() {
    this.dialog.closeAll();
  }
  admins = [
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/adela.svg',
      selected: false,
    },
    {
      name: 'Dapious Kodewarlock',
      email: 'kodewarlock@gmail.com',
      category: 'Car',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/jason.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Napep',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/adela.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/adela.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/jason.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/jason.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
    {
      name: 'Mavin Dee',
      email: 'mavindee@gmail.com',
      category: 'Bus',
      carType: 'Toyota',
      plateNumber: 'DKA-234-uy',
      address: 'NO 12 teen street Abuja, Nigeria',
      carPark: 'Peace Park',
      image: 'assets/images/christian.svg',
      selected: false,
    },
  ];
}
