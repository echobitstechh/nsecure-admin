import { Component } from '@angular/core';

@Component({
  selector: 'app-park-debtors',
  templateUrl: './park-debtors.component.html',
  styleUrl: './park-debtors.component.css',
})
export class ParkDebtorsComponent {
  pieChartData = [
    { name: 'Paid', value: 63 },
    { name: 'Debt', value: 20 },
    { name: 'Inactive', value: 17 },
  ];
}
