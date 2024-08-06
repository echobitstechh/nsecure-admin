import { Component, Input, OnInit } from '@angular/core';

export interface ChartData {
  value: number;
  color: string;
  label: string;
  valueLabel: number;
}

@Component({
  selector: 'app-circular-progress-chart',
  templateUrl: './circular-progress-chart.component.html',
  styleUrls: ['./circular-progress-chart.component.css'],
})
export class CircularProgressChartComponent implements OnInit {
  @Input() data: ChartData[] = [];
  @Input() size = 200;
  @Input() strokeWidth = 15;
  @Input() spacing = 10;
  @Input() backgroundColor = '#E9ECEF';

  center!: number;

  ngOnInit(): void {
    this.center = this.size / 2;
  }

  getStrokeDashArray(value: number, circumference: number): string {
    return `${(value / 100) * circumference} ${circumference}`;
  }

  getRadius(index: number): number {
    return (
      this.size / 2 - ((index + 1) * (this.strokeWidth + this.spacing)) / 2
    );
  }

  getCircumference(radius: number): number {
    return 2 * Math.PI * radius;
  }

  getStrokeDashOffset(index: number, circumference: number): number {
    const totalValue = this.data.reduce((acc, item) => acc + item.value, 0);
    const value = this.data[index].value;
    const percentage = value / totalValue;
    return circumference * (1 - percentage);
  }
}
