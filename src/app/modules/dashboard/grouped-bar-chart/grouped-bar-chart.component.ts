import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
interface DataItem {
  group: string;
  values: {
    label: string;
    value: number;
  }[];
}

@Component({
  selector: 'app-grouped-bar-chart',
  template: '<div id="grouped-bar-chart"></div>',
  styleUrls: ['./grouped-bar-chart.component.css'],
})
export class GroupedBarChartComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const data: DataItem[] = [
      {
        group: 'S',
        values: [
          { label: 'tax1', value: 40 },
          { label: 'tax2', value: 20 },
        ],
      },
      {
        group: 'M',
        values: [
          { label: 'tax1', value: 80 },
          { label: 'tax2', value: 60 },
        ],
      },
      {
        group: 'T',
        values: [
          { label: 'tax1', value: 120 },
          { label: 'tax2', value: 100 },
        ],
      },
      {
        group: 'W',
        values: [
          { label: 'tax1', value: 100 },
          { label: 'tax2', value: 80 },
        ],
      },
      {
        group: 'F',
        values: [
          { label: 'tax1', value: 140 },
          { label: 'tax2', value: 120 },
        ],
      },
    ];
    this.createGroupedBarChart(data);
  }

  private createGroupedBarChart(data: DataItem[]) {
    const container = this.el.nativeElement.querySelector('#grouped-bar-chart');
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.group))
      .rangeRound([0, width])
      .paddingInner(0.1);

    const x1 = d3
      .scaleBand()
      .domain(data[0].values.map((d) => d.label))
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data.flatMap((d) => d.values.map((v) => v.value))) as number,
      ])
      .nice()
      .range([height, 0]);

    const color = d3
      .scaleOrdinal()
      .domain(data[0].values.map((d) => d.label))
      .range(['#69b3a2', '#ff6347']);

    svg
      .append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${x0(d.group)},0)`)
      .selectAll('rect')
      .data((d) => d.values)
      .enter()
      .append('rect')
      .attr('x', (d) => x1(d.label) ?? 0)
      .attr('y', (d) => y(d.value))
      .attr('width', x1.bandwidth())
      .attr('height', (d) => height - y(d.value));
    // .attr('fill', (d) => color(d.label));

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x0));

    svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y));
  }
}
