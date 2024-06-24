import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor(private location: Location) {}
  getInvalidFormFields(form: FormGroup): any[] {
    const invalidControls = [];

    for (const controlName in form.controls) {
      const control = form.controls[controlName];
      control.markAsTouched();
      if (control.disabled) continue;
      if (control.invalid) {
        invalidControls.push({
          name: controlName,
          errors: control.errors
        });
      }
    }
    return invalidControls;
  }

  cutText(name: string, chars: number): string {
    if (!name) {
      ('');
    }
    return name?.length > chars ? name.substr(0, chars) + '...' : name;
  }

  back(): void {
    this.location.back();
  }

  getFullName(data: any, cut = false, length = 15): string {
    console.log(data);
    const fullName = data?.firstName + ' ' + data?.otherNames + ' ' + data?.lastName;
    if (cut) {
      return this.cutText(fullName, length);
    }
    return fullName;
  }

  preventNumberInput(event: KeyboardEvent): void {
    const charCode = typeof event.which == 'undefined' ? event.keyCode : event.which;
    const charStr = String.fromCharCode(charCode);
    if (event?.code?.includes('Numpad')) {
      event?.preventDefault();
    } else if (/\d/.test(charStr)) {
      event?.preventDefault();
    }
  }
  getTodayDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  }

  public removeModalDialogClass(): void {
    const elements = document.getElementsByClassName('modal-dialog');

    if (elements.length > 0) {
      elements[0].classList.remove('modal-dialog');
    }
  }

  public hideOffCanvasClass(): void {
    const elements = document.getElementsByClassName('offcanvas');

    if (elements.length > 0) {
      elements[0].classList.remove('show');
    }
  }

  showOffCanvasClass(): void {
    const elements = document.getElementsByClassName('offcanvas');

    if (elements.length > 0) {
      elements[0].classList.add('show');
      console.log(elements);
    }
  }
}
