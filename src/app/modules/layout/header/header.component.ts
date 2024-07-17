import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
// export class HeaderComponent {

//   constructor() {
//   }

// }
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() showSidebarAndHeader: boolean = false;

  ngOnInit(): void {}
}
