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
    // {
    //   name: 'Adela Parkson',
    //   park: 'Mengu Park',
    //   imageUrl: 'assets/images/adela.svg',
    // },
    // {
    //   name: 'Christian Mad',
    //   park: 'Ado Park',
    //   imageUrl: 'assets/images/christian.svg',
    // },
    // {
    //   name: 'Jason Statham',
    //   park: 'Maranabo Park',
    //   imageUrl: 'assets/images/jason.svg',
    // },
  ];
  constructor() {}
  ngOnInit(): void {}
}
