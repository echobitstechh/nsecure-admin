import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-account-action-modal',
  templateUrl: './account-action-modal.component.html',
  styleUrl: './account-action-modal.component.css',
})
export class AccountActionModalComponent {
  password: string = '';
  deleteText: string = '';

  constructor(
    public dialogRef: MatDialogRef<AccountActionModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; message: string; actionType: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close(this.password);
  }
}
