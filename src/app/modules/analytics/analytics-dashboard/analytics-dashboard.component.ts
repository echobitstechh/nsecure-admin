import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.css'],
})
export class AnalyticsDashboardComponent implements OnInit {
  constructor() {}
  public data = [
    {
      value: 100,
      month: 'Jan',
    },
    {
      value: 120,
      month: 'Feb',
    },
    {
      value: 480,
      month: 'Mar',
    },
    {
      value: 320,
      month: 'Apr',
    },
    {
      value: 360,
      month: 'May',
    },
    {
      value: 400,
      month: 'Jun',
    },
    {
      value: 500,
      month: 'Jul',
    },
    {
      value: 510,
      month: 'Aug',
    },
    {
      value: 320,
      month: 'Sep',
    },
    {
      value: 410,
      month: 'Oct',
    },
    {
      value: 320,
      month: 'Nov',
    },
    {
      value: 430,
      month: 'Dec',
    },
  ];
  ngOnInit(): void {}
}
