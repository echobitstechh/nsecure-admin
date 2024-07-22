import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

interface ArcDatum {
  endAngle: number;
}

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css'],
})
export class GaugeChartComponent implements OnInit {
  constructor(private el: ElementRef) {}

  @Input() percentage: number = 80;
  @Input() fillColor: string = '#295DFA';
  ngOnInit(): void {
    this.createGaugeChart(this.percentage);
  }

  private createGaugeChart(percentage: number) {
    const container = this.el.nativeElement.querySelector('#gauge-chart');
    const width = 133;
    const height = 70;
    const thickness = 20;
    const startAngle = -Math.PI / 2;
    const endAngle = Math.PI / 2;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const arc = d3
      .arc<ArcDatum>()
      .innerRadius(width / 2 - thickness)
      .outerRadius(width / 2)
      .startAngle(startAngle);

    const background = svg
      .append('path')
      .datum({ endAngle: endAngle } as ArcDatum)
      .style('fill', '#FF9066')
      .attr('d', arc)
      .attr('transform', `translate(${width / 2}, ${height})`);

    const foreground = svg
      .append('path')
      .datum({ endAngle: startAngle } as ArcDatum)
      .style('fill', this.fillColor)
      .attr('d', arc)
      .attr('transform', `translate(${width / 2}, ${height})`);

    const text = svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('font-weight', '500')
      .attr('color', '#081332')
      .attr('transform', `translate(${width / 1.9}, ${height / 1.1})`)
      .text(`${percentage}%`);
    foreground
      .transition()
      .duration(750)
      .attrTween('d', function (d) {
        const interpolate = d3.interpolate(
          d.endAngle,
          startAngle + (endAngle - startAngle) * (percentage / 100)
        );
        return function (t: number) {
          d.endAngle = interpolate(t);
          return arc(d as ArcDatum); // Type assertion here
        } as any; // Type assertion to 'any' to avoid type checking
      });
  }
}
