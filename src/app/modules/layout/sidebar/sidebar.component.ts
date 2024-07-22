import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
// export class SidebarComponent {

// }
export class SidebarComponent implements OnInit {
  @Input() showSidebarAndHeader: boolean = false;

  ngOnInit(): void {}
}
