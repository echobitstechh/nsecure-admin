import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onFieldAgentClick(admin: ListFieldAgent): void {
    this.router.navigate(['/management/field-agent/fieldagent-details'], {
      queryParams: { adminId: admin.id },
    });
  }
}
