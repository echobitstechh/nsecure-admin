import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-toggle',
  templateUrl: './notification-toggle.component.html',
  styleUrls: ['./notification-toggle.component.css'],
})
export class NotificationToggleComponent {
  notificationsEnabled = false;

  toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;
  }
}
