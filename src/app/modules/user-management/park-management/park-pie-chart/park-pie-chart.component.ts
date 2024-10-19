import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

interface ChartData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-park-pie-chart',
  templateUrl: './park-pie-chart.component.html',
  styleUrls: ['./park-pie-chart.component.css'],
})
export class ParkPieChartComponent implements OnInit {
  @Input() data: ChartData[] = [];
  @Input() title: string = '';
  @Input() timeFrames: string[] = [
    'This Week',
    'Last Week',
    'This Month',
    'Last Month',
  ];
  selectedTimeFrame: string = this.timeFrames[0];

  onTimeFrameChange(event: any) {
    this.selectedTimeFrame = event.target.value;
  }

  private svg: any;
  private margin = 10;
  private width = 170;
  private height = 170;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;

  private colors: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
    this.createLegend();
  }

  private createSvg(): void {
    this.svg = d3
      .select('div#pieChart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
  }

  private createColors(): void {
    this.colors = d3
      .scaleOrdinal<string>()
      .domain(this.data.map((d) => d.name))
      .range(['#FF9066', '#053688', '#EFF4FB']);
  }

  private drawChart(): void {
    const pie = d3.pie<ChartData>().value((d: ChartData) => d.value);

    this.svg
      .selectAll('path')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr(
        'd',
        d3
          .arc<d3.PieArcDatum<ChartData>>()
          .innerRadius(0)
          .outerRadius(this.radius)
      )
      .attr('fill', (d: d3.PieArcDatum<ChartData>, i: number) =>
        this.colors(i.toString())
      )
      .style('stroke-width', '1px');
  }

  private createLegend(): void {
    const legendDiv = this.elRef.nativeElement.querySelector('#legend');
    legendDiv.innerHTML = '';

    legendDiv.style.display = 'flex';

    this.data.forEach((d, i) => {
      const legendItem = document.createElement('div');
      legendItem.style.marginBottom = '10px';

      const colorLabelDiv = document.createElement('div');
      colorLabelDiv.style.display = 'flex';
      colorLabelDiv.style.alignItems = 'center';

      const colorBox = document.createElement('span');
      colorBox.style.backgroundColor = this.colors(i.toString());
      colorBox.style.width = '12px';
      colorBox.style.height = '12px';
      colorBox.style.borderRadius = '20px';
      colorBox.style.display = 'inline-block';
      colorBox.style.marginRight = '5px';

      const labelText = document.createElement('span');
      labelText.textContent = d.name;
      labelText.style.marginRight = '10px';

      colorLabelDiv.appendChild(colorBox);
      colorLabelDiv.appendChild(labelText);

      const percentageText = document.createElement('div');
      percentageText.textContent = `${d.value}%`;
      percentageText.style.marginLeft = '17px';

      legendItem.appendChild(colorLabelDiv);
      legendItem.appendChild(percentageText);
      legendDiv.appendChild(legendItem);
    });
  }
}
