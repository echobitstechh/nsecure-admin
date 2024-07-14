import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-and-support',
  templateUrl: './contact-and-support.component.html',
  styleUrl: './contact-and-support.component.css',
})
export class ContactAndSupportComponent {
  selectedContact: any;
  isContactListVisible = false;

  toggleContactList() {
    this.isContactListVisible = !this.isContactListVisible;
  }
  onContactSelected(contact: any) {
    this.selectedContact = contact;
    this.isContactListVisible = false;
  }
}
