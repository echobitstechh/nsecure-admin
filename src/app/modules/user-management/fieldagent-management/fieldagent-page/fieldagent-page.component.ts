import { Component } from '@angular/core';

interface ListFieldAgent {
  firstName: string;
  lastName: string;
  email: string;
  userId?: string;
  phoneNumber?: string;
  carPark?: string;
  taxPayers?: number;
  status?: string;
}

@Component({
  selector: 'app-fieldagent-page',
  templateUrl: './fieldagent-page.component.html',
  styleUrl: './fieldagent-page.component.css',
})
export class FieldagentPageComponent {
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
}
