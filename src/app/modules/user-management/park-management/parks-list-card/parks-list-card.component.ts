import { Component, Input, OnInit } from '@angular/core';

interface Park {
  parkName: string;
  parkNumber: number;
}

@Component({
  selector: 'app-parks-list-card',
  templateUrl: './parks-list-card.component.html',
  styleUrls: ['./parks-list-card.component.css'],
})
export class ParksListCardComponent implements OnInit {
  @Input() title: string = 'Add Parks';
  @Input() parks: Park[] = [
    {
      parkName: 'Adela Parkson',
      parkNumber: 234,
    },
    {
      parkName: 'Christian Mad',
      parkNumber: 789,
    },
    {
      parkName: 'Jason Statham',
      parkNumber: 888,
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
