import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audit-log-card',
  templateUrl: './audit-log-card.component.html',
  styleUrl: './audit-log-card.component.css',
})
export class AuditLogCardComponent {
  @Input() title: string = 'Total Activity Count by Date';
  @Input() value: number = 40689;
  @Input() timeFrames: string[] = ['Week', 'Month', 'Year'];
  selectedTimeFrame: string = this.timeFrames[0];

  onTimeFrameChange(event: any) {
    this.selectedTimeFrame = event.target.value;
  }
}
