import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface TableData {
  email?: string;
  category?: string;
  carType?: string;
  licensePlate?: string;
  residenceAddress?: string;
  carPark?: string;
  image?: string;
  selected?: boolean;
  time?: string;
  username?: string;
  session_id?: number;
  role?: string;
  activityType?: string;
  details?: string;
  ip_address?: number | string;
  durations?: number | string;
  userId?: string;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
  createdAt?: string | number;
  updatedAt?: string | number;
  phoneNumber?: string;
  vehicleYear?: string;
  gender?: string;
  vehicleManufacturer?: string;
  country?: string;
  taxPayers?: number;
  status?: string;
}

interface TableColumn {
  field: keyof TableData | 'actions';
  label: string;
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit {
  @ViewChild('detailsModal') detailsModal!: TemplateRef<any>;
  @Input() tableDatas: TableData[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() showCheckboxColumn = false;
  @Input() showSerialNumber = true;
  @Input() modalTemplate: TemplateRef<any> | null = null;
  // @Input() routeLink: string | null = null;
  @Output() rowClick = new EventEmitter<any>();

  onRowClick(row: any): void {
    this.rowClick.emit(row);
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }
  pageSize = 10;
  currentPage = 1;
get totalPages() {
    return Math.ceil(this.tableDatas.length / this.pageSize);
  }
    isLargeScreen = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 820;
  }
  constructor(public dialog: MatDialog, private router: Router) {}

  openDetails(data: TableData) {
    if (this.rowClick.observers.length > 0) {
      this.rowClick.emit(data);
    } else {
      this.dialog.open(this.modalTemplate || this.detailsModal, {
        data,
        disableClose: true,
        maxWidth: '700px',
        maxHeight: '80vh',
        autoFocus: false,
      });
    }
  }

  closeModal() {
    this.dialog.closeAll();
  }
  hasActionsColumn(): boolean {
    return this.columns.some((col) => col.field === 'actions');
  }

  toggleAll(event: any) {
    const checked = event.target.checked;
    this.tableDatas.forEach((tableData) => (tableData.selected = checked));
  }

  get paginatedtableDatas() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.tableDatas.slice(start, end);
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
