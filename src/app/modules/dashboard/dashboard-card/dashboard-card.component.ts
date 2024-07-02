import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})
export class DashboardCardComponent {
  @Input() title: string = 'Placeholder Title';
  @Input() value: string = 'Placeholder Value';
  @Input() trend: string = 'Placeholder Trend';
  @Input() trendText: string = 'Placeholder Trend Text';
  @Input() iconUrl: string = '';
  @Input() iconUrlTwo: string = '';
}
