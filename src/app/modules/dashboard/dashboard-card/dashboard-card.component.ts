import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})
export class DashboardCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() trend: string = '';
  @Input() trendText: string = '';
  @Input() iconUrl: string = '';
  @Input() iconUrlTwo: string = '';
  @Input() trendColor: 'green' | 'red' = 'green';
}
