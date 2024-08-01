import { Component, Input, TemplateRef } from '@angular/core';

interface ColumnDefinition {
  field: string;
  label: string;
  sortable?: boolean;
  template: TemplateRef<any>;
  class?: string;
}

interface RowAction {
  label: string;
  method: (row: any) => void;
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent {
  @Input() columns: ColumnDefinition[] = [];
  @Input() data: any[] = [];
  @Input() rowActions: RowAction[] = [];

  pageSize = 10;
  currentPage = 1;
  totalPages = Math.ceil(this.data.length / this.pageSize);

  get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data.slice(start, end);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
