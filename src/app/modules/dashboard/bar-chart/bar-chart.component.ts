import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

interface DataItem {
  label: string;
  value: number;
}

@Component({
  selector: 'app-bar-chart',
  template: '<div id="bar-chart"></div>',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const data: DataItem[] = [
      { label: '00', value: 30 },
      { label: '04', value: 50 },
      { label: '08', value: 70 },
      { label: '12', value: 90 },
      { label: '16', value: 110 },
      { label: '20', value: 130 },
    ];
    this.createBarChart(data);
  }

  private createBarChart(data: DataItem[]) {
    const container = this.el.nativeElement.querySelector('#bar-chart');
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) ?? 0])
      .nice()
      .range([height, 0]);

    svg
      .append('g')
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.label) ?? 0)
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.value))
      .attr('fill', '#69b3a2');

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y));
  }
}
