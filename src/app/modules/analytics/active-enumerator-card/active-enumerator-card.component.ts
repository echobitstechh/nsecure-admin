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
  @Input() enumerators: Enumerator[] = [
    { name: 'Mavin', park: 'Mangu' },
    { name: 'Mavin', park: 'Mararaba' },
    { name: 'Dickson', park: 'Oshodi' },
    { name: 'Dee', park: 'Ikorodu' },
    { name: 'Pop', park: 'Ogoja' },
    { name: 'Derek', park: 'Mararaba' },
    { name: 'Isak', park: 'Mararaba' },
    { name: 'Jackson', park: 'Mararaba' },
  ];
}
