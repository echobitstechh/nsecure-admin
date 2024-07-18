import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css'],
})
export class RegisterCardComponent implements OnInit {
  public userCount: number = 0;
  public percentageChange: number = 0;
  public isPositiveChange: boolean = true;

  constructor() {}

  ngOnInit() {
    this.fetchRegisterStats();
  }

  fetchRegisterStats() {
    this.userCount = 279;
    this.percentageChange = 2.45;
    this.isPositiveChange = this.percentageChange > 0;
  }
}
