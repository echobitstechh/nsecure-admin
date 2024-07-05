import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card-one',
  templateUrl: './analytics-card-one.component.html',
  styleUrls: ['./analytics-card-one.component.css'],
})
export class AnalyticsCardOneComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() percentage: string = "";

  constructor() {}
}
