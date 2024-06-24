import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {getCurrencySymbol} from '@angular/common';
import {environment} from '../../../environments/environment.prod';


export class Utils {
  static getFileUrl(fileId: number, download = true): string {
    return download
      ? `${environment.apiBaseUrl}/files/${fileId}`
      : `${environment.apiBaseUrl}/files/${fileId}/open`;
  }

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  static conversionRates = {
    USD: { name: 'DOLLAR_TO_NAIRA_EXCHANGE_RATE', fromCurrencyCode: 'NGN' } // converting from naira to usd
  };

  public ctrDown = false;




  static validateInvoiceMinAmountPayable(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control?.value) {
        const value = parseFloat(control.value.replace(/[^0-9.e+]/gi, ''));
        return value > 0 ? null : { min: value };
      }
      return null;
    };
  }


  static enumEntries<T>(t: T): ReadonlyArray<readonly [keyof T, T[keyof T]]> {
    const entries = Object.entries(t as any);
    const plainStringEnum = entries.every(([key, value]) => typeof value === 'string');
    return (plainStringEnum ? entries : entries.filter(([k, v]) => typeof v !== 'string')) as any;
  }



  static enumKeys<T>(t: T): ReadonlyArray<keyof T> {
    return this.enumEntries(t).map(([key]) => key);
  }

  static enumValues<T>(t: T): unknown[] {
    const values = Object.values(t as any);
    const plainStringEnum = values.every((x) => typeof x === 'string');
    return plainStringEnum ? values : values.filter((x) => typeof x !== 'string');
  }

  static getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  static getUniqueArray(input: any[]): string {
    return input.reduce((acc, current) => {
      const x = acc.find((item: { name: any; }) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
  }

  // static maskCharacters(String )

  public static noWhitespaceValidator(control: FormControl): unknown {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public static maskCharacter(str: string, mask: string, n = 1): string {
    return ('' + str).slice(0, -n).replace(/./g, mask) + ('' + str).slice(-n);
  }

  public static preventNumberInput(event: KeyboardEvent): void {
    const charCode = typeof event.which == 'undefined' ? event.keyCode : event.which;
    const charStr = String.fromCharCode(charCode);
    // Check if the input is from the calculator section of the keyboard
    if (event.code.includes('Numpad')) {
      event.preventDefault();
    } else if (/\d/.test(charStr)) {
      event.preventDefault();
    }
  }

  public static numberOnly(e: KeyboardEvent): void {
    if (
      // Only allow digits 0-9
      (e.keyCode < 48 || e.keyCode > 57) &&
      // Only allow decimal point (.)
      e.key !== '.' &&
      // Allow backspace (keyCode 8)
      e.keyCode !== 8 &&
      // Allow arrow keys (37-40)
      (e.keyCode < 37 || e.keyCode > 40) &&
      // Allow numpad keys (1-9)
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  public static preventAlphabetInput(e: KeyboardEvent): void {
    // const keyCode = e.keyCode;
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105) &&
      e.keyCode != 8
    ) {
      e.preventDefault();
    }
  }

  public static currencySymbol(iso4127Code: string, defaultSymbol: any = null): string {
    let symbol = getCurrencySymbol(iso4127Code, 'narrow');
    if (symbol == iso4127Code) {
      switch (iso4127Code?.toLowerCase()) {
        case 'zwl':
          symbol = '$';
          break;
      }
    }
    if (defaultSymbol) {
      symbol = defaultSymbol;
    }
    return symbol;
  }

  public static getStringSizeInMB(str: string | undefined): number {
    const encoder = new TextEncoder();
    const encodedString = encoder.encode(str);
    const sizeInBytes = encodedString.byteLength;
    return sizeInBytes / (1024 * 1024);
  }

  public static getTotalItemsQty(items: Array<any>): number {
    return items.reduce((acc: number, item: any) => acc + item.quantity, 0);
  }

  public static concatItemsNames(items: Array<any>): string {
    return items.reduce((acc: string, item: any) => acc + (acc !== '' ? ', ' : '') + item.name, '');
  }

  public static getTotalAmountPayable(items: Array<any>): number {
    return items.reduce((acc: number, item: any) => acc + item.amountPayable, 0);
  }

  public static preventAlphabetInputV2(e: KeyboardEvent): void {
    //TODO implement to handle paste and copy actions
  }

  preventAlphabetInput($event: KeyboardEvent): void {
    const cmdKey = 91;
    const vKey = 86;
    const cKey = 67;
    const aKey = 65;
    const excludedKeys = [8, 37, 39, 46];
    if ($event.ctrlKey || $event.keyCode == cmdKey) {
      this.ctrDown = true;
    }

    if (this.ctrDown && $event.keyCode == vKey) {
      //paste action, handle appropriately
    } else if (this.ctrDown && $event.keyCode == cKey) {
      //copy action, handle appropriately
    } else if (this.ctrDown && $event.keyCode == aKey) {
      //select all action, handle appropriately
    } else if (
      !(
        ($event.keyCode >= 48 && $event.keyCode <= 57) ||
        ($event.keyCode >= 96 && $event.keyCode <= 105) ||
        excludedKeys.includes($event.keyCode)
      )
    ) {
      $event.preventDefault();
    }
    //TODO to be moved to Utils.preventAlphabetInputV2($event)
  }
}

/**
 *
 * @param obj
 */
export function removeUndefinedOrNullFields(obj: any): any {
  Object.keys(obj).forEach((key) => {
    if (
      obj[key] === undefined ||
      obj[key] === 'null' ||
      obj[key] === null ||
      obj[key] === '' ||
      obj[key] < 1
    ) {
      delete obj[key];
    }
  });

  return obj;
}

/**
 *
 * @param config
 */

export interface Config {
  errorCode?: string;
}
