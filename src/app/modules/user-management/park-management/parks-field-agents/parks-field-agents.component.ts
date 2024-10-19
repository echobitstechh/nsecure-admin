import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

interface Agent {
  parkName?: string;
  currentNoOfAgent?: number;
  transportCategoriesCovered?: any;
  firstName?: string;
  lastName?: string;
}

@Component({
  selector: 'app-parks-field-agents',
  templateUrl: './parks-field-agents.component.html',
  styleUrl: './parks-field-agents.component.css',
})
export class ParksFieldAgentsComponent implements OnInit {
  agents: Agent[] = [];
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
        this.agents = response.parks;
        console.log('agents:', this.agents);
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching agents', error);
      }
    );
  }
}
