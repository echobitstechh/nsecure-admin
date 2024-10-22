
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-reportinghome-card',
  templateUrl: './reportinghome-card.component.html',
  styleUrl: './reportinghome-card.component.css'
})
export class ReportingHomeCard{
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() trend: string = '';
  @Input() trendText: string = '';
  @Input() iconUrl: string = '';
  @Input() iconUrlTwo: string = '';
  @Input() trendColor: 'green' | 'red' = 'green';

}
