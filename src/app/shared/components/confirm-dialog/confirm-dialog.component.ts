import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  @Input() title = 'Confirm Action';
  @Input() message = 'Are you sure you want to proceed?';
  @Input() confirmText = 'Yes';
  @Input() cancelText = 'No';
  @Input() confirmBtnClass = 'btn btn-warning';
  @Input() cancelBtnClass = 'btn btn-light';

  @Output() confirmEvent = new EventEmitter<void>();
  @Output() cancelEvent = new EventEmitter<void>();

  constructor(public bsModalRef: BsModalRef) {}

  confirm(): void {
    this.confirmEvent.emit();
    this.bsModalRef.hide();
  }

  cancel(): void {
    this.cancelEvent.emit();
    this.bsModalRef.hide();
  }
}
