import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

interface Parks {
  parkName: string;
  location: string;
  fieldAgentCount: number;
  driverCount: number;
  transportCategoriesCovered: any;
}

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrl: './parks.component.css',
})
export class ParksComponent implements OnInit {
  tableParks: Parks[] = [];
  loading: boolean = false;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.loadParks();
  }

  loadParks(): void {
    this.loading = true;
    this.apiService.getParks().subscribe(
      (response) => {
        this.loading = false;
        this.tableParks = response.parks;
        console.log('parks:', this.tableParks);
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching parks', error);
      }
    );
  }
}
