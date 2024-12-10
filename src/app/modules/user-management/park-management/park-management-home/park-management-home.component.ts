import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

interface Park {
  totalNumberOfParks: number;
  totalNumberOfFieldAgents: number;
  totalDebtorsCount: number;
  avgParkRevenue: number;
  avgExpectedRevenue: number;
}

interface Parks {
  parkName: string;
  location: string;
  fieldAgentCount: number;
  driverCount: number;
  transportCategoriesCovered: any;
}
@Component({
  selector: 'app-park-management-home',
  templateUrl: './park-management-home.component.html',
  styleUrl: './park-management-home.component.css',
})
export class ParkManagementHomeComponent implements OnInit {
  showAllCard: boolean = false;
  loading: boolean = false;
  parks: Park | null = null;
  tableParks: Parks[] = [];

  constructor(private apiService: ApiService) {}

  toggleAllCards() {
    this.showAllCard = !this.showAllCard;
  }

  ngOnInit(): void {
    this.loadParks();
  }

  loadParks(): void {
    this.loading = true;
    this.apiService.getParks().subscribe(
      (response) => {
        this.loading = false;
        this.parks = response;
        this.tableParks = response.parks;
        console.log('parks data:', this.parks);
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching parks data', error);
      }
    );
  }
}
