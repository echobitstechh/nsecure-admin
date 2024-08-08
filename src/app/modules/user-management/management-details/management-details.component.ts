import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-management-details',
  templateUrl: './management-details.component.html',
  styleUrls: ['./management-details.component.css'],
})
export class ManagementDetailsComponent {
  @Input() activityLogData: { date: string; description: string }[] = [
    { date: '14/02/2023, 1:50PM', description: 'Logged out' },
    { date: '14/02/2023, 2:50PM', description: 'Created revenue head' },
    {
      date: '14/02/2023, 2:50PM',
      description: 'Created a user with access to CMS',
    },
    { date: '14/02/2023, 2:50PM', description: 'Logged in' },
    { date: '14/02/2023, 2:50PM', description: 'Changed password' },
  ];

  passwordControl = new FormControl('4re124567');
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
