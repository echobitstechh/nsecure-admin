import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card-two',
  templateUrl: './dashboard-card-two.component.html',
  styleUrls: ['./dashboard-card-two.component.css'],
})
export class DashboardCardTwoComponent {
  @Input() title: string = '';
  @Input() timeFrames: string[] = [
    'This Week',
    'Last Week',
    'This Month',
    'Last Month',
  ];
  selectedTimeFrame: string = this.timeFrames[0];

  onTimeFrameChange(event: any) {
    this.selectedTimeFrame = event.target.value;
  }
}
