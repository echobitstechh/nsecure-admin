import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

interface ListSuperAgent {
  firstName: string;
  lastName: string;
  email: string;
  userId?: string;
  phoneNumber?: string;
  carPark?: string;
  taxPayers?: number;
  status?: string;
  id?: string;
}

@Component({
  selector: 'app-superagent-list',
  templateUrl: './superagent-list.component.html',
  styleUrl: './superagent-list.component.css',
})
export class SuperagentListComponent implements OnInit {
  superAgents: ListSuperAgent[] = [
    {
      firstName: 'Silifah',
      lastName: 'Admin',
      email: 'Email@email.com',
      userId: 'FA001',
      carPark: 'Mangu',
      taxPayers: 9,
      status: 'Active',
    },
    {
      firstName: 'Super',
      lastName: 'Admin',
      email: 'email02@email.com',
      phoneNumber: '234 8110792786',
      status: 'Inactive',
    },
  ];
  loading: boolean = false;
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  onSuperAgentClick(admin: ListSuperAgent): void {
    this.router.navigate(['/management/super-agent/superagent-details'], {
      queryParams: { adminId: admin.id },
    });
  }

  loadAgents(): void {
    this.loading = true;
    this.apiService.getAgents('Super Agent').subscribe(
      (response) => {
        this.loading = false;
        this.superAgents = response;
        console.log('super agents data:', this.superAgents);
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching super agents data', error);
      }
    );
  }
}
