import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  @Input() public data!: { value: number; month: string }[];

  private width = 650;
  private height = 300;
  private margin = 50;

  public svg!: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  public svgInner!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
  public yScale!: d3.ScaleLinear<number, number>;
  public xScale!: d3.ScaleBand<string>;
  public xAxis!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
  public yAxis!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
  public lineGroup!: d3.Selection<SVGPathElement, unknown, HTMLElement, any>;
  public areaGroup!: d3.Selection<SVGPathElement, unknown, HTMLElement, any>;

  constructor(public chartElem: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && this.data) {
      this.initializeChart();
      this.drawChart();

      window.addEventListener('resize', () => this.drawChart());
    }
  }

  private initializeChart(): void {
    this.svg = d3
      .select<HTMLElement, unknown>(this.chartElem.nativeElement)
      .select<SVGSVGElement>('.linechart')
      .append<SVGSVGElement>('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    // Define the gradient
    const defs = this.svg.append('defs');
    const gradient = defs
      .append('linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('x2', '0%')
      .attr('y1', '0%')
      .attr('y2', '100%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FF8C00')
      .attr('stop-opacity', 0.8);

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#FFA500')
      .attr('stop-opacity', 0);

    this.svgInner = this.svg
      .append<SVGGElement>('g')
      .style('transform', `translate(${this.margin}px, ${this.margin}px)`);

    this.yScale = d3
      .scaleLinear()
      .domain([100, 500])
      .range([this.height - 2 * this.margin, 0]);

    this.yAxis = this.svgInner
      .append<SVGGElement>('g')
      .attr('id', 'y-axis')
      .style('transform', `translate(${this.margin}px, 0)`);

    this.xScale = d3
      .scaleBand()
      .domain(this.data.map((d) => d.month))
      .range([this.margin, this.width - 2 * this.margin])
      .padding(0.1);

    this.xAxis = this.svgInner
      .append<SVGGElement>('g')
      .attr('id', 'x-axis')
      .style('transform', `translate(0, ${this.height - 2 * this.margin}px)`);

    this.areaGroup = this.svgInner
      .append<SVGPathElement>('path')
      .attr('id', 'area')
      .style('fill', 'url(#gradient)');

    this.lineGroup = this.svgInner
      .append<SVGPathElement>('path')
      .attr('id', 'line')
      .style('fill', 'none')
      .style('stroke', '#FF9066')
      .style('stroke-width', '6px');
  }

  private drawChart(): void {
    this.width = this.chartElem.nativeElement.getBoundingClientRect().width;
    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    const xAxis = d3.axisBottom(this.xScale);
    this.xAxis.call(xAxis);

    const yAxis = d3
      .axisLeft(this.yScale)
      .tickValues([100, 200, 300, 400, 500]);
    this.yAxis.call(yAxis);

    const line = d3
      .line<{ month: string; value: number }>()
      .x((d) => this.xScale(d.month)! + this.xScale.bandwidth() / 2)
      .y((d) => this.yScale(d.value))
      .curve(d3.curveMonotoneX);

    const area = d3
      .area<{ month: string; value: number }>()
      .x((d) => this.xScale(d.month)! + this.xScale.bandwidth() / 2)
      .y0(this.height - 2 * this.margin)
      .y1((d) => this.yScale(d.value))
      .curve(d3.curveMonotoneX);

    this.areaGroup.datum(this.data).attr('d', area);
    this.lineGroup.datum(this.data).attr('d', line);

    this.svg.selectAll('.domain').attr('stroke', 'none');
    this.svg.selectAll('.tick line').attr('stroke', 'none');
  }
}
