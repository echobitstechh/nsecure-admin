import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSuperAgentClick(admin: ListSuperAgent): void {
    this.router.navigate(['/management/super-agent/superagent-details'], {
      queryParams: { adminId: admin.id },
    });
  }
}
