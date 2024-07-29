import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css'],
})
export class RegisterCardComponent implements OnInit {
  @Input() data: { label: string; value: number }[] = [];
  public userCount: number = 0;
  public percentageChange: number = 0;
  public isPositiveChange: boolean = true;

  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.fetchRegisterStats();
    this.createChart();
  }

  fetchRegisterStats() {
    this.userCount = 279;
    this.percentageChange = 2.45;
    this.isPositiveChange = this.percentageChange > 0;
  }

  createChart() {
    const element = this.chartContainer.nativeElement;
    const data = this.data;

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.6)
      .domain(data.map((d) => d.label));

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d) => d.value)!]);

    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('style', 'stop-color:#FF9066;stop-opacity:1');

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('style', 'stop-color:#4318FF47;stop-opacity:1');

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.label)!)
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => height - y(d.value))
      .attr('fill', 'url(#gradient)');

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y).ticks(0));
    svg.selectAll('.domain').attr('stroke', 'none');
    svg.selectAll('.tick line').attr('stroke', 'none');
  }
}
