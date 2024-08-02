import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

interface TableData {
  email?: string;
  category?: string;
  carType?: string;
  plateNumber?: string;
  address?: string;
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
  adminId?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  isActive?: boolean;
  createdAt?: string | number;
  updatedAt?: string | number;
  phoneNumber?: string;
  vehicleYear?: string;
  gender?: string;
  // driverId: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  // categoryId: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  // countryId: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  // country: 'string';
  //
  // referralCode: 'string';
  // vehicleManufacturer: 'string';
  // vehicleColor: 'string';
  // licensePlate: 'string';
  // driverLicense: 'string';
  // vehicleLogBook: 'string';
  // privateHireLicenseBadge: 'string';
  // insuranceCertificate: 'string';
  // motTestCertificate: 'string';
  // isAvailable: true;
  // latitude: 'string';
  // longitude: 'string';
  // driverRating: 0;
  // numberOfRatings: 0;
  // status: 'Active';
  // dateOfBirth: 'string';
  // verificationCode: 'string';
  // residenceAddress: 'string';
  // profileImage: 'string';
  // driverLicenseVerified: true;
  // vehicleLogBookVerified: true;
  // privateHireLicenseBadgeVerified: true;
  // insuranceCertificateVerified: true;
  // motTestCertificateVerified: true;
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
  ngOnInit(): void {}
  pageSize = 10;
  currentPage = 1;
  totalPages = Math.ceil(this.tableDatas.length / this.pageSize);

  constructor(public dialog: MatDialog) {}
  openDetails(data: TableData) {
    this.dialog.open(this.modalTemplate || this.detailsModal, {
      data,
      disableClose: true,
    });
  }

  closeModal() {
    this.dialog.closeAll();
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
