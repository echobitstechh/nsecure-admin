import { Component, Input } from '@angular/core';

interface Payer {
  name: string;
  email: string;
  id: string;
  park: string;
  amount: string;
}

@Component({
  selector: 'app-recent-payers',
  templateUrl: './recent-payers.component.html',
  styleUrls: ['./recent-payers.component.css'],
})
export class RecentPayersComponent {
  @Input() payers: Payer[] = [
    {
      name: 'Lionia Donald',
      email: 'liond@gmail.com',
      id: '7890656',
      park: 'Mangu',
      amount: '$1200',
    },
    {
      name: 'Richard Seyi',
      email: 'richseyi@gmail.com',
      id: '1254356',
      park: 'Mararaba',
      amount: '$800',
    },
    {
      name: 'Adamu Abbas',
      email: 'adamuabb@gmail.com',
      id: '3425679',
      park: 'Ado',
      amount: '$600',
    },
    {
      name: 'Dapious',
      email: 'dapious@gmail.com',
      id: '3425679',
      park: 'Abakaliki',
      amount: '$600',
    },
    {
      name: 'Kodewarlock',
      email: 'kodewarlock@gmail.com',
      id: '3425679',
      park: 'Ogoja',
      amount: '$600',
    },
  ];
}
