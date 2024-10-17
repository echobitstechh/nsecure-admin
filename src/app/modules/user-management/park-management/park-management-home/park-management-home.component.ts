import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-park-management-home',
  templateUrl: './park-management-home.component.html',
  styleUrl: './park-management-home.component.css',
})
export class ParkManagementHomeComponent implements OnInit {
  showAllCard: boolean = false;
  constructor() {}

  toggleAllCards() {
    this.showAllCard = !this.showAllCard;
  }

  ngOnInit(): void {}
}
