import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reporting-home',
  templateUrl: './reportinghome.component.html',
  styleUrls: ['./reportinghome.component.css'],
})
export class ReportingHomeComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() trend: string = '';
  @Input() trendText: string = '';
  @Input() iconUrl: string = '';
  @Input() iconUrlTwo: string = '';
  @Input() trendColor: 'green' | 'red' = 'green';
}
