import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable, of, startWith, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkConnectionService {
  private networkStatus$: Observable<boolean>;

  constructor() {
    this.networkStatus$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    ).pipe(
      startWith(navigator.onLine),
      tap((status) => console.log(`Network Status: ${status ? 'Online' : 'Offline'}`))
    );
  }

  getNetworkStatus(): Observable<boolean> {
    return this.networkStatus$;
  }
}
