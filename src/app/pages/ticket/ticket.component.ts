import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTicket, faChevronRight, faChevronDown, faChartPie, faQrcode, faFloppyDisk, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import menu from '../../../assets/db/menu.json';
import { IMenu } from '../../../interface';
import { calculateEnergy, getFoodByTime } from '../../../utils';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: any;
}

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, MenuOptionsComponent, NgApexchartsModule],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [65, 19, 17],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['carbohidratos', 'proteínas', 'grasas'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  faTicket = faTicket;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  faChartPie = faChartPie;
  faQrcode = faQrcode;
  faFloppyDisk = faFloppyDisk;
  faDollarSign = faDollarSign;

  Menu: IMenu[] = menu;

  currentDate = '2024-09-02';
  currentTime = '10:45';

  currentFood = getFoodByTime(this.Menu, this.currentDate, this.currentTime);
  currentFoodEnergy = calculateEnergy(this.currentFood!);

  dataMenu = [
    {
      id: '6aca2b90-2333-4a36-83da-257c28cd65c4',
      field: 'almuerzo',
      details: [
        {
          name: 'sopa de entrada',
          value: 'crema de garbanzo',
        },
        {
          name: 'segundo',
          value: 'carapulcra con sopa seca con chancho',
        },
        {
          name: 'postre',
          value: 'pera',
        },
        {
          name: 'refresco',
          value: 'agua de manzanilla',
        },
      ],
      image: 'example_url_image.com',
    },
  ];
  dataTicket = [
    {
      id: 'aee8b5f4-7d4d-409e-b46b-9fc088dddfe6',
      field: 'ticket-almuerzo',
      details: [
        {
          name: 'nombre',
          value: 'Andrea',
        },
        {
          name: 'Código de estudiante',
          value: '27202029',
        },
        {
          name: 'Escuela Profesional',
          value: 'Trabajo Social',
        },
        {
          name: 'Código de ticket',
          value: '23453',
        },
        {
          name: 'Fecha',
          value: 'jueves,3 de septiembre',
        },
        {
          tiempo: 'Tiempo de Expiración',
          valor: '2 minutos',
        },
      ],
      image: 'example_url_image.com',
    },
  ];
}
