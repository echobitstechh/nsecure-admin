import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

interface Enumerator {
  firstName: string;
  lastName: string;
  park: string;
  enumeratorId: number;
}

@Component({
  selector: 'app-enumerator-list-card',
  templateUrl: './enumerator-list-card.component.html',
  styleUrls: ['./enumerator-list-card.component.css'],
})
export class EnumeratorListCardComponent implements OnInit {
  @Input() title: string = 'Field Agents';
  @Input() enumerators: Enumerator[] = [
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
