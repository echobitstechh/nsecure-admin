import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarChartData } from '../bar-chart/bar-chart.component';
import { ApiService } from '../../../services/api.service';

interface DashboardData {
  newRegisteredUsersPerDayOftheMonth: {
    usersByDay: {
      driverUsersByDayOfMonth: any[];
      enumeratorUsersByDayOfMonth: any[];
    };
  };
  newRegisteredWorkersThisWeek: number;
  totalTransportWorkers: {
    noOfRiders: number;
    totalDrivers: number;
    totalEnumerators: number;
    totalTransportWorkers: number;
  };
}
interface DashboardTaxData {
  listOfAllTaxes: {
    taxes: any[];
  };
  totalTaxesPaid: number;
  totalTaxesPaidThisWeek: {
    totalTaxesForThisWeek: number;
  };
  totalTaxesPerDayOfTheWeek: {
    taxesByDayofTheWeek: {
      Monday: number;
      Tuesday: number;
      Wednesday: number;
      Thursday: number;
      Friday: number;
      Saturday: number;
      Sunday: number;
    };
  };
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  pieChartData = [
    { name: 'Your files', value: 63 },
    { name: 'System', value: 25 },
    { name: 'Other', value: 12 },
  ];

  transportWorkersChartData = [
    { value: 0, color: '#053688', label: 'Drivers', valueLabel: 0 },
    { value: 0, color: '#FF9066', label: 'Enumerators', valueLabel: 0 },
  ];
  barChartData!: BarChartData[];
  // barChartData: BarChartData[] = [
  //   { day: 'M', value: 30 },
  //   { day: 'T', value: 40 },
  //   { day: 'W', value: 50 },
  //   { day: 'T', value: 60 },
  //   { day: 'F', value: 70 },
  //   { day: 'S', value: 40 },
  //   { day: 'S', value: 20 },
  // ];

  registerChartData = [
    { label: '00', value: 35 },
    { label: '04', value: 20 },
    { label: '08', value: 45 },
    { label: '12', value: 40 },
    { label: '14', value: 47 },
    { label: '16', value: 60 },
    { label: '18', value: 10 },
  ];

  enumerators = [];
  dashboardData: DashboardData | null = null;
  dashboardTaxData: DashboardTaxData | null = null;
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEnumerators();
    this.loadDashboardData();
    this.loadDashboardTaxData();
  }

  loadDashboardData(): void {
    this.apiService.getDataforDashboard().subscribe(
      (response) => {
        this.dashboardData = response.data;
        console.log('dashboardData:', this.dashboardData);

        if (this.dashboardData) {
          const driversData =
            this.dashboardData.newRegisteredUsersPerDayOftheMonth.usersByDay
              .driverUsersByDayOfMonth;
          const enumeratorsData =
            this.dashboardData.newRegisteredUsersPerDayOftheMonth.usersByDay
              .enumeratorUsersByDayOfMonth;

          // const totalDrivers = driversData.reduce(
          //   (acc, cur) => acc + cur.value,
          //   0
          // );
          // const totalEnumerators = enumeratorsData.reduce(
          //   (acc, cur) => acc + cur.value,
          //   0
          // );

          this.transportWorkersChartData = [
            {
              value: driversData.length,
              color: '#053688',
              label: 'Drivers',
              valueLabel: driversData.length,
            },
            {
              value: enumeratorsData.length,
              color: '#FF9066',
              label: 'Enumerators',
              valueLabel: enumeratorsData.length,
            },
          ];
        }
      },
      (error) => {
        this.error = 'Error fetching Dashboard Data';
        console.error('Error fetching Dashboard Data', error);
      }
    );
  }

  loadEnumerators(): void {
    this.apiService.getEnumerators().subscribe(
      (response) => {
        this.enumerators = response.data.enumerators;
        console.log('workers:', this.enumerators);
      },
      (error) => {
        this.error = 'Error fetching enumerators';
        console.error('Error fetching enumerators', error);
      }
    );
  }

  // loadDashboardTaxData(): void {
  //   this.apiService.getTaxDashboardData().subscribe(
  //     (response) => {
  //       this.dashboardTaxData = response.data;
  //       console.log('tax data:', this.dashboardTaxData);
  //     },

  //     (error) => {
  //       this.error = 'Error fetching Tax data';
  //       console.error('Error fetching Tax data', error);
  //     }
  //   );
  // }
  loadDashboardTaxData(): void {
    this.apiService.getTaxDashboardData().subscribe(
      (response) => {
        this.dashboardTaxData = response.data;
        console.log('tax data:', this.dashboardTaxData);

        // Transform the data for bar chart
        const taxesByDay =
          this.dashboardTaxData?.totalTaxesPerDayOfTheWeek.taxesByDayofTheWeek;
        this.barChartData = [
          { day: 'M', value: taxesByDay?.Monday ?? 0 },
          { day: 'T', value: taxesByDay?.Tuesday ?? 0 },
          { day: 'W', value: taxesByDay?.Wednesday ?? 0 },
          { day: 'T', value: taxesByDay?.Thursday ?? 0 },
          { day: 'F', value: taxesByDay?.Friday ?? 0 },
          { day: 'S', value: taxesByDay?.Saturday ?? 0 },
          { day: 'S', value: taxesByDay?.Sunday ?? 0 },
        ];
      },
      (error) => {
        this.error = 'Error fetching Tax data';
        console.error('Error fetching Tax data', error);
      }
    );
  }

  ngOnDestroy() {}
}
