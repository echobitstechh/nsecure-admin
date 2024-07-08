import { Component, Input } from '@angular/core';

interface Enumerator {
  name: string;
  park: string;
}

@Component({
  selector: 'app-active-enumerator-card',
  templateUrl: './active-enumerator-card.component.html',
  styleUrls: ['./active-enumerator-card.component.css'],
})
export class ActiveEnumeratorCardComponent {
  public enumerators: Enumerator[] = [
    { name: 'Mavin', park: 'Mangu' },
    { name: 'Dee', park: 'Mararaba' },
    { name: 'Dee', park: 'Mararaba' },
    { name: 'Dee', park: 'Mararaba' },
    { name: 'Dee', park: 'Mararaba' },
    { name: 'Dee', park: 'Mararaba' },
    { name: 'Dee', park: 'Mararaba' },
    { name: 'Dee', park: 'Mararaba' },
  ];
}
