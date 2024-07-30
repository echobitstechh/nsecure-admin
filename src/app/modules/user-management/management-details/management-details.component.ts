import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-management-details',
  templateUrl: './management-details.component.html',
  styleUrls: ['./management-details.component.css'],
})
export class ManagementDetailsComponent {
  @Input() activityLogData: { date: string; description: string }[] = [];

  passwordControl = new FormControl('');
  isCopied = false;

  copyPassword() {
    navigator.clipboard.writeText(this.passwordControl.value ?? '').then(
      () => {
        this.isCopied = true;
        console.log('Password copied to clipboard!');

        setTimeout(() => {
          this.isCopied = false;
        }, 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  }
}
