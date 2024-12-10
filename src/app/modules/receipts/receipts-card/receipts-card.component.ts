import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-receipts-card',
  templateUrl: './receipts-card.component.html',
  styleUrl: './receipts-card.component.css'
})
export class ReceiptsCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() iconUrl: string = '';

}
