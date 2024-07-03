import { Component, Input } from '@angular/core';

interface Enumerator {
  name: string;
  park: string;
  imageUrl: string;
}

@Component({
  selector: 'app-enumerator-list-card',
  templateUrl: './enumerator-list-card.component.html',
  styleUrls: ['./enumerator-list-card.component.css'],
})
export class EnumeratorListCardComponent {
  @Input() title: string = 'Enumerators';
  @Input() enumerators: Enumerator[] = [
    {
      name: 'Adela Parkson',
      park: 'Mengu Park',
      imageUrl: 'assets/images/adela.svg',
    },
    {
      name: 'Christian Mad',
      park: 'Ado Park',
      imageUrl: 'assets/images/christian.svg',
    },
    {
      name: 'Jason Statham',
      park: 'Maranabo Park',
      imageUrl: 'assets/images/jason.svg',
    },
  ];
}
