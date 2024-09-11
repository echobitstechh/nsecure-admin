import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivationStart,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { NetworkConnectionService } from './services/network-connection.service';
import { filter, Subscription } from 'rxjs';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Nsecure-admin';
  text = 'loading';
  isExtranet = false;
  loading = false;
  previousNetworkStatusLastUpdatedAt = 0;
  previousNetworkStatus = true;
  maxDownTImeDurationBeforePageReloadsInMs = 3000;
  initialized = false;
  networkSubscription: Subscription | undefined;
  showSidebarAndHeader = false;
  showSidebar = true;
  isSidebarOpen = false;

  // closeOffcanvas() {
  //   const offcanvasElement = document.getElementById('bdSidebar');
  //   if (offcanvasElement) { // Check if the element is not null
  //     const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
  //     bsOffcanvas.hide();
  //   } else {
  //     console.error('Offcanvas element not found!');
  //   }
  // }

  constructor(
    private router: Router,
    private networkService: NetworkConnectionService
  ) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        // At this point, 'event' is of type NavigationEnd thanks to the type guard
        this.showSidebarAndHeader = !(
          event.urlAfterRedirects === '/login' ||
          event.urlAfterRedirects === '/' ||
          event.urlAfterRedirects === '/forgot-password' ||
          event.urlAfterRedirects === '/create-password'
        );
      });
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        if (data) {
          this.isExtranet = data.snapshot.data['isExtranet'];
        }
      } else if (data instanceof NavigationStart) {
        this.loading = true;
      } else if (data instanceof NavigationEnd) {
        this.loading = false;
      }
      if (data instanceof NavigationEnd) {
        const sidebar = document.querySelector('#bdSidebar');
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (sidebar && backdrop) {
          sidebar.classList.remove('show');
          backdrop.classList.remove('show');
        }
      }
    });

    this.networkSubscription = this.networkService
      .getNetworkStatus()
      .subscribe((res) => {
        if (!res) {
          this.text = 'Internet connection lost.. please check and try again';
        } else {
          this.text = 'loading';
        }
        const moment = Date.now();
        const downTimeDurationInMs =
          moment - this.previousNetworkStatusLastUpdatedAt;
        if (this.previousNetworkStatus !== res && res) {
          this.initialized = false;
          console.log('Network Status Changed. is Online:', res);
          console.log('Downtime duration:', downTimeDurationInMs);

          if (
            downTimeDurationInMs >
              this.maxDownTImeDurationBeforePageReloadsInMs &&
            !this.initialized
          ) {
            window.location.reload();
          }
        }
        this.previousNetworkStatus = res;
        this.previousNetworkStatusLastUpdatedAt = Date.now();
      });

    // logout(): void {
    //   this.authService.logout().subscribe({
    //     next: res => {
    //       console.log(res);
    //       this.storageService.clean();
    //
    //       window.location.reload();
    //     },
    //     error: err => {
    //       console.log(err);
    //     }
    //   });
    // }
  }

  logOut() {}
}
