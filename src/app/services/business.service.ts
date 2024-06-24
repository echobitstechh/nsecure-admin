import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  onBusinessCreated: EventEmitter<any> = new EventEmitter<any>();
}
