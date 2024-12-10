import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parks-card',
  templateUrl: './parks-card.component.html',
  styleUrls: ['./parks-card.component.css'],
})
export class ParksCardComponent {
  @Input() title: string = 'Total Number of Park';
  @Input() value: string | number = 0;
  @Input() valuePrice: number | string = 0;
  @Input() icon: string = 'assets/icons/persons.svg';
}
