import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = 'Save';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Input() icon: string | null = null;
  @Input() routerLink!: string;

  constructor(private router: Router) {}

  navigate() {
    if (this.routerLink) {
      this.router.navigate([this.routerLink]);
    }
  }
}
