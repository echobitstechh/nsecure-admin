import { Component, OnDestroy, OnInit } from '@angular/core';
interface ChartData {
  day: string;
  value1: number;
  value2: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  pieChartData = [
    { name: 'Your files', value: 63 },
    { name: 'System', value: 25 },
    { name: 'Other', value: 12 },
  ];
  taxChartData: ChartData[] = [
    { day: 'S', value1: 30, value2: 50 },
    { day: 'M', value1: 70, value2: 80 },
    { day: 'T', value1: 50, value2: 100 },
    { day: 'W', value1: 60, value2: 120 },
    { day: 'T', value1: 90, value2: 110 },
    { day: 'F', value1: 50, value2: 130 },
    { day: 'S', value1: 70, value2: 90 },
    { day: 'M', value1: 70, value2: 80 },
    { day: 'T', value1: 50, value2: 100 },
    { day: 'W', value1: 60, value2: 120 },
  ];
  ngOnInit(): void {}

  constructor() {}

  ngOnDestroy() {}
}
