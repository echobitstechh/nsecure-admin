import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-tax-progress-card',
  templateUrl: './tax-progress-card.component.html',
  styleUrls: ['./tax-progress-card.component.css'],
})
export class TaxProgressCardComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') private chartContainer!: ElementRef;

  private data = [
    { month: 'January', lastMonth: 4000, thisMonth: 5000 },
    { month: 'February', lastMonth: 2800, thisMonth: 4800 },
    { month: 'March', lastMonth: 2500, thisMonth: 4700 },
    { month: 'April', lastMonth: 2600, thisMonth: 4900 },
    { month: 'May', lastMonth: 3800, thisMonth: 5200 },
    { month: 'June', lastMonth: 3000, thisMonth: 5300 },
    { month: 'July', lastMonth: 3200, thisMonth: 5500 },
  ];

  constructor() {}

  ngOnInit(): void {    this.createChart();
}

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const margin = { top: 10, right: 20, bottom: 10, left: 20 };
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
      .scalePoint()
      .domain(this.data.map((d) => d.month))
      .range([0, width]);

    const yDomain = this.data
      .flatMap((d) => [d.lastMonth, d.thisMonth])
      .filter((d) => d !== undefined);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(yDomain) as number])
      .nice()
      .range([height, 0]);

    const lineLastMonth = d3
      .line<any>()
      .x((d) => x(d.month)!)
      .y((d) => y(d.lastMonth)!);

    const lineThisMonth = d3
      .line<any>()
      .x((d) => x(d.month)!)
      .y((d) => y(d.thisMonth)!);

    const areaLastMonth = d3
      .area<any>()
      .x((d) => x(d.month)!)
      .y0(height)
      .y1((d) => y(d.lastMonth)!);

    const areaThisMonth = d3
      .area<any>()
      .x((d) => x(d.month)!)
      .y0(height)
      .y1((d) => y(d.thisMonth)!);

    svg
      .append('path')
      .datum(this.data)
      .attr('fill', '#FF9066')
      .attr('fill-opacity', 1.2) // Increase opacity for better visibility
      .attr('d', areaLastMonth);

    svg
      .append('path')
      .datum(this.data)
      .attr('fill', '#053688')
      .attr('fill-opacity', 0.3) // Decrease opacity to make it less dominant
      .attr('d', areaThisMonth);

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
      .attr('cx', (d) => x(d.month)!)
      .attr('cy', (d) => y(d.lastMonth)!)
      .attr('r', 5)
      .attr('fill', '#FF9066');

    svg
      .selectAll('.dot-thisMonth')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('class', 'dot-thisMonth')
      .attr('cx', (d) => x(d.month)!)
      .attr('cy', (d) => y(d.thisMonth)!)
      .attr('r', 5)
      .attr('fill', '#053688CC');

    const xAxis = svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    const yAxis = svg.append('g').call(d3.axisLeft(y));

    xAxis.selectAll('text').remove();
    xAxis.selectAll('line').remove();
    yAxis.selectAll('text').remove();
    yAxis.selectAll('line').remove();

    xAxis.selectAll('path').remove();
    yAxis.selectAll('path').remove();
  }
}
