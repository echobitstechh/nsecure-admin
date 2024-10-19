import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks-list-card',
  templateUrl: './parks-list-card.component.html',
  styleUrls: ['./parks-list-card.component.css'],
})
export class ParksListCardComponent implements OnInit {
  @Input() title: string = 'Add Parks';
  @Input() icon: string = '';
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() number!: number;
  @Input() value: string = '';
  constructor() {}
  ngOnInit(): void {}
}
