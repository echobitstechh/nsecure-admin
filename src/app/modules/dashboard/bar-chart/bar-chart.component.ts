// import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
// import * as d3 from 'd3';

// export interface BarChartData {
//   day: string;
//   lowValue: number;
//   highValue: number;
// }

// @Component({
//   selector: 'app-bar-chart',
//   templateUrl: './bar-chart.component.html',
//   styleUrls: ['./bar-chart.component.css'],
// })
// export class BarChartComponent implements OnInit {
//   @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;
//   @Input() data: BarChartData[] = [];

//   private margin = { top: 20, right: 20, bottom: 30, left: 40 };
//   private width = 600 - this.margin.left - this.margin.right;
//   private height = 217 - this.margin.top - this.margin.bottom;
//   private svg: any;
//   private x: any;
//   private y: any;

//   constructor() {}

//   ngOnInit(): void {
//     this.createChart();
//     this.updateChart();
//   }

//   private createChart(): void {
//     const element = this.chartContainer.nativeElement;
//     this.svg = d3
//       .select(element)
//       .append('svg')
//       .attr('width', this.width + this.margin.left + this.margin.right)
//       .attr('height', this.height + this.margin.top + this.margin.bottom)
//       .append('g')
//       .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

//     this.x = d3.scaleBand().range([0, this.width]).padding(0.1);

//     this.y = d3.scaleLinear().range([this.height, 0]);

//     this.svg
//       .append('g')
//       .attr('class', 'x-axis')
//       .attr('transform', `translate(0,${this.height})`);

//     this.svg.append('g').attr('class', 'y-axis');
//   }

//   private updateChart(): void {
//     const barWidth = 12;
//     this.x
//       .domain(this.data.map((d: BarChartData, i: number) => `${d.day}-${i}`))
//       .range([0, this.width - barWidth]);
//     this.x.bandwidth = () => barWidth;
//     this.y.domain([0, 160]);

//     this.svg
//       .selectAll('.x-axis')
//       .call(d3.axisBottom(this.x).tickFormat((d: any) => d.split('-')[0]));

//     this.svg
//       .selectAll('.y-axis')
//       .call(d3.axisLeft(this.y).tickValues([0, 40, 80, 120, 160]));

//     const bars = this.svg.selectAll('.bar').data(this.data);

//     const barEnter = bars
//       .enter()
//       .append('g')
//       .attr('class', 'bar')
//       .attr(
//         'transform',
//         (d: BarChartData, i: number) =>
//           `translate(${this.x(`${d.day}-${i}`) as number},0)`
//       );
//     barEnter
//       .append('rect')
//       .attr('class', 'low')
//       .attr('width', this.x.bandwidth())
//       .attr('y', (d: BarChartData) => this.y(d.lowValue))
//       .attr('height', (d: BarChartData) => this.height - this.y(d.lowValue))
//       .attr('fill', '#0644AA');

//     barEnter
//       .append('rect')
//       .attr('class', 'high')
//       .attr('width', this.x.bandwidth())
//       .attr('y', (d: BarChartData) => this.y(d.lowValue + d.highValue))
//       .attr('height', (d: BarChartData) => this.height - this.y(d.highValue))
//       .attr('fill', '#FF9066');

//     bars.attr(
//       'transform',
//       (d: BarChartData, i: number) =>
//         `translate(${this.x(`${d.day}-${i}`) as number},0)`
//     );

//     bars
//       .select('.low')
//       .attr('width', this.x.bandwidth())
//       .attr('y', (d: BarChartData) => this.y(d.lowValue))
//       .attr('height', (d: BarChartData) => this.height - this.y(d.lowValue))
//       .attr('fill', '#0644AA');

//     bars
//       .select('.high')
//       .attr('width', this.x.bandwidth())
//       .attr('y', (d: BarChartData) => this.y(d.lowValue + d.highValue))
//       .attr('height', (d: BarChartData) => this.height - this.y(d.highValue))
//       .attr('fill', '#FF9066');

//     this.svg.selectAll('.domain').attr('stroke', 'none');
//     this.svg.selectAll('.tick line').attr('stroke', 'none');
//   }
// }

import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as d3 from 'd3';

export interface BarChartData {
  day: string;
  lowValue: number;
  highValue: number;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;
  @Input() data: BarChartData[] = [];

  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private width = 600 - this.margin.left - this.margin.right;
  private height = 217 - this.margin.top - this.margin.bottom;
  private svg: any;
  private x: any;
  private y: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
    this.updateChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    this.svg = d3
      .select(element)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    this.x = d3.scaleBand().range([0, this.width]).padding(0.1);

    this.y = d3.scaleLinear().range([this.height, 0]);

    this.svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${this.height})`);

    this.svg.append('g').attr('class', 'y-axis');
  }

  private updateChart(): void {
    const barWidth = 12;
    const paddingLeft = 18;

    this.x
      .domain(this.data.map((d: BarChartData, i: number) => `${d.day}-${i}`))
      .range([0, this.width - barWidth]);
    this.x.bandwidth = () => barWidth;
    this.y.domain([0, 160]);

    this.svg
      .selectAll('.x-axis')
      .call(d3.axisBottom(this.x).tickFormat((d: any) => d.split('-')[0]));

    this.svg
      .selectAll('.y-axis')
      .call(d3.axisLeft(this.y).tickValues([0, 40, 80, 120, 160]));

    const bars = this.svg.selectAll('.bar').data(this.data);

    const barEnter = bars
      .enter()
      .append('g')
      .attr('class', 'bar')
      .attr(
        'transform',
        (d: BarChartData, i: number) =>
          `translate(${(this.x(`${d.day}-${i}`) as number) + paddingLeft},0)`
      );

    barEnter
      .append('rect')
      .attr('class', 'low')
      .attr('width', this.x.bandwidth())
      .attr('y', (d: BarChartData) => this.y(d.lowValue))
      .attr('height', (d: BarChartData) => this.height - this.y(d.lowValue))
      .attr('fill', '#0644AA');

    barEnter
      .append('rect')
      .attr('class', 'high')
      .attr('width', this.x.bandwidth())
      .attr('y', (d: BarChartData) => this.y(d.lowValue + d.highValue))
      .attr('height', (d: BarChartData) => this.height - this.y(d.highValue))
      .attr('fill', '#FF9066');

    bars.attr(
      'transform',
      (d: BarChartData, i: number) =>
        `translate(${(this.x(`${d.day}-${i}`) as number) + paddingLeft},0)`
    );

    bars
      .select('.low')
      .attr('width', this.x.bandwidth())
      .attr('y', (d: BarChartData) => this.y(d.lowValue))
      .attr('height', (d: BarChartData) => this.height - this.y(d.lowValue))
      .attr('fill', '#0644AA');

    bars
      .select('.high')
      .attr('width', this.x.bandwidth())
      .attr('y', (d: BarChartData) => this.y(d.lowValue + d.highValue))
      .attr('height', (d: BarChartData) => this.height - this.y(d.highValue))
      .attr('fill', '#FF9066');

    this.svg.selectAll('.domain').attr('stroke', 'none');
    this.svg.selectAll('.tick line').attr('stroke', 'none');
  }
}