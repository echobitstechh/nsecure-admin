import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

interface ListFieldAgent {
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
  selector: 'app-fieldagent-page',
  templateUrl: './fieldagent-page.component.html',
  styleUrl: './fieldagent-page.component.css',
})
export class FieldagentPageComponent implements OnInit {
  fieldAgents: ListFieldAgent[] = [
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

  onFieldAgentClick(admin: ListFieldAgent): void {
    this.router.navigate(['/management/field-agent/fieldagent-details'], {
      queryParams: { adminId: admin.id },
    });
  }

  loadAgents(): void {
    this.loading = true;
    this.apiService.getAgents('Field Agent').subscribe(
      (response) => {
        this.loading = false;
        this.fieldAgents = response;
        console.log('field agents data:', this.fieldAgents);
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching field agents data', error);
      }
    );
  }
}
