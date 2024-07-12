import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactAndSupportComponentRoutingModule } from './contact-and-support-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ContactAndSupportComponent } from './contact-and-support/contact-and-support.component';

@NgModule({
  declarations: [
    ChatWindowComponent,
    ContactListComponent,
    ContactAndSupportComponent,
  ],
  imports: [CommonModule, ContactAndSupportComponentRoutingModule],
})
export class ContactAndSupportModule {}
