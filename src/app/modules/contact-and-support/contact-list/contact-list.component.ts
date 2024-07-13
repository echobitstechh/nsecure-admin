import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  @Output() contactSelected = new EventEmitter<any>();

  contacts = [
    {
      name: 'Mavin D',
      lastMessage: 'Hi! My POS is having issue',
      time: '5m',
      image: 'assets/images/chatper.svg',
      id: 1,
    },
    {
      name: 'Adamu A',
      lastMessage: 'Sent Report',
      time: '10m',
      image: 'assets/images/chatper.svg',
      id: 2,
    },
    {
      name: 'Peace J',
      lastMessage: 'Can i get another on...',
      time: '20m',
      image: 'assets/images/chatper.svg',
      id: 3,
    },
    {
      name: 'Teni G',
      lastMessage: 'I forgot to forward the file',
      time: '10m',
      image: 'assets/images/chatper.svg',
      id: 4,
    },
    {
      name: 'Adamu A',
      lastMessage: 'Sent Report',
      time: '10m',
      image: 'assets/images/chatper.svg',
      id: 5,
    },
    {
      name: 'Adamu A',
      lastMessage: 'Sent Report',
      time: '10m',
      image: 'assets/images/chatper.svg',
      id: 6,
    },
    {
      name: 'Adamu A',
      lastMessage: 'Sent Report',
      time: '10m',
      image: 'assets/images/chatper.svg',
      id: 7,
    },
    {
      name: 'Adamu A',
      lastMessage: 'Sent Report',
      time: '10m',
      image: 'assets/images/chatper.svg',
      id: 8,
    },
  ];

  selectContact(contact: any) {
    this.contactSelected.emit(contact);
  }
}
