import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent {
  @Input() selectedContact: any;

  messages = [
    {
      senderImage: 'assets/images/chatper.svg',
      text: 'Lorem Lorem Lorem Lorem Lorem Lorem Ipsum sit amet, consectetur adipiscing elit',
      time: '7h ago',
      type: 'received',
    },
    {
      senderImage: 'assets/images/chatper.svg',
      text: 'Lorem Lorem',
      time: '7h ago',
      type: 'sent',
    },
    {
      senderImage: 'assets/images/chatper.svg',
      text: 'Lorem Lorem',
      time: '7h ago',
      type: 'received',
    },
    {
      senderImage: 'assets/images/chatper.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adip e fits el metus',
      time: '7h ago',
      type: 'sent',
    },
  ];
}
