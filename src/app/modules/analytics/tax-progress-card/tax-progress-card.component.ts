import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-tax-progress-chart',
  templateUrl: './tax-progress-card.component.html',
  styleUrls: ['./tax-progress-card.component.css'],
})
export class TaxProgressChartComponent implements OnInit {
  @ViewChild('chart') private chartContainer!: ElementRef;

  private data = [
    { month: 'January', lastMonth: 4000, thisMonth: 4500 },
    { month: 'February', lastMonth: 3800, thisMonth: 4800 },
    { month: 'March', lastMonth: 4200, thisMonth: 4700 },
    { month: 'April', lastMonth: 4600, thisMonth: 4900 },
    { month: 'May', lastMonth: 4800, thisMonth: 5200 },
    { month: 'June', lastMonth: 5000, thisMonth: 5300 },
    { month: 'July', lastMonth: 5200, thisMonth: 5500 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scalePoint()
      .domain(this.data.map((d) => d.month))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d) => Math.max(d.lastMonth, d.thisMonth))])
      .nice()
      .range([height, 0]);

    const lineLastMonth = d3
      .line<any>()
      .x((d) => x(d.month))
      .y((d) => y(d.lastMonth));

    const lineThisMonth = d3
      .line<any>()
      .x((d) => x(d.month))
      .y((d) => y(d.thisMonth));

    svg
      .append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', 'orange')
      .attr('stroke-width', 2)
      .attr('d', lineLastMonth);

    svg
      .append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('d', lineThisMonth);

    svg
      .selectAll('.dot-lastMonth')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('class', 'dot-lastMonth')
      .attr('cx', (d) => x(d.month))
      .attr('cy', (d) => y(d.lastMonth))
      .attr('r', 5)
      .attr('fill', 'orange');

    svg
      .selectAll('.dot-thisMonth')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('class', 'dot-thisMonth')
      .attr('cx', (d) => x(d.month))
      .attr('cy', (d) => y(d.thisMonth))
      .attr('r', 5)
      .attr('fill', 'blue');

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  }
}
