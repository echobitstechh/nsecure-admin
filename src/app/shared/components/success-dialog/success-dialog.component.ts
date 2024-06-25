import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrl: './success-dialog.component.css'
})
export class SuccessDialogComponent {
  @Input() title = 'Success';
  @Input() message = 'Action was successful';
  @Input() reload = false;
  /**
   * @deprecated use close event instead
   */
  @Input() onClose: (() => void) | undefined;
  lottieIconPath = 'assets/lottie/success.json';
  @Output() closeEvent = new EventEmitter<void>();

  constructor(private modalRef: BsModalRef) {}

  close(): void {
    if (this.onClose) {
      this.onClose();
    }
    this.closeEvent.emit();
    this.modalRef.hide();
    if (this.reload) {
      window.location.reload();
    }
  }
}
