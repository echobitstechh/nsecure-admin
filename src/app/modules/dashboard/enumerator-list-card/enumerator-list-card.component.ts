import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

interface Enumerator {
  firstName: string;
  lastName: string;
  park: string;
  enumeratorID: number;
}

@Component({
  selector: 'app-enumerator-list-card',
  templateUrl: './enumerator-list-card.component.html',
  styleUrls: ['./enumerator-list-card.component.css'],
})
export class EnumeratorListCardComponent implements OnInit {
  @Input() title: string = 'Enumerators';
  @Input() enumerators: Enumerator[] = [
    // {
    //   name: 'Adela Parkson',
    //   park: 'Mengu Park',
    //   imageUrl: 'assets/images/adela.svg',
    // },
    // {
    //   name: 'Christian Mad',
    //   park: 'Ado Park',
    //   imageUrl: 'assets/images/christian.svg',
    // },
    // {
    //   name: 'Jason Statham',
    //   park: 'Maranabo Park',
    //   imageUrl: 'assets/images/jason.svg',
    // },
  ];
  error = '';
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.loadEnumerators();
  }

  loadEnumerators(): void {
    this.apiService.getEnumerators().subscribe(
      (response) => {
        this.enumerators = response.data.enumerators;
        console.log('workers:', this.enumerators);
      },
      (error) => {
        this.error = 'Error fetching enumerators';
        console.error('Error fetching enumerators', error);
      }
    );
  }
}
