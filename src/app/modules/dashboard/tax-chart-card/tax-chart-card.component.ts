import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

interface ChartData {
  day: string;
  value1: number;
  value2: number;
}

@Component({
  selector: 'app-tax-chart-card',
  templateUrl: './tax-chart-card.component.html',
  styleUrls: ['./tax-chart-card.component.css'],
})
export class TaxChartCardComponent implements OnInit {
  @Input() data: ChartData[] = [];

  private svg: any;
  private margin = { top: 20, right: 30, bottom: 40, left: 40 };
  private width = 150 - this.margin.left - this.margin.right;
  private height = 300 - this.margin.top - this.margin.bottom;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    console.log('Initializing chart with data:', this.data);
    this.createSvg();
    this.drawChart();
  }

  private createSvg(): void {
    const chartContainer = this.elRef.nativeElement.querySelector('#chart');
    chartContainer.innerHTML = ''; // Clear previous SVG

    this.svg = d3
      .select(chartContainer)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  private drawChart(): void {
    if (!this.data || this.data.length === 0) {
      return;
    }

    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(this.data.map((d) => d.day))
      .padding(0.2);

    this.svg
      .append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x));

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d) => d.value1 + d.value2) || 100])
      .range([this.height, 0]);

    this.svg.append('g').call(d3.axisLeft(y));

    this.svg
      .selectAll('.bar1')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar1')
      .attr('x', (d: ChartData) => x(d.day)!)
      .attr('y', (d: ChartData) => y(d.value1))
      .attr('width', x.bandwidth())
      .attr('height', (d: ChartData) => this.height - y(d.value1))
      .attr('fill', '#0644AA');

    this.svg
      .selectAll('.bar2')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar2')
      .attr('x', (d: ChartData) => x(d.day)!)
      .attr('y', (d: ChartData) => y(d.value1 + d.value2))
      .attr('width', x.bandwidth())
      .attr('height', (d: ChartData) => this.height - y(d.value2))
      .attr('fill', '#FF9066');
  }
}
