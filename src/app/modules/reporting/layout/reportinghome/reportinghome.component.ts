import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router,Event } from '@angular/router';

@Component({
  selector: 'app-reportinghome',
  templateUrl: './reportinghome.component.html',
  styleUrl: './reportinghome.component.css',
})
export class ReportingHomeComponent implements OnInit{
  constructor(private router: Router){}
  matchRoute: boolean = false;
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
           this.matchRoute= !currentRoute.includes('reporting/collection-report');
      }
      })

  }

}
