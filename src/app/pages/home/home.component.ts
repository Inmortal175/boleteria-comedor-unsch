import { Component, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';

import { NgOptimizedImage } from '@angular/common';
import { calculateEnergy, getMenuByDay } from '../../../utils';
import { faHome, faChevronRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';

import menu from '../../../assets/db/menu.json';
import { IAlmuerzo, ICena, IDesayuno, IMenu } from '../../../interfaz';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: any;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NgOptimizedImage, MenuOptionsComponent, FontAwesomeModule, NgApexchartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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

  faHome = faHome;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  Menu: IMenu[] = menu;

  curent_day = '2024-09-02';
  img_default_food = 'https://picsum.photos/seed/picsum/200/300';
  db_menu = getMenuByDay(this.Menu, this.curent_day);

  e_desayuno = calculateEnergy(this.db_menu?.desayuno as IDesayuno);
  e_almuerzo = calculateEnergy(this.db_menu?.almuerzo as IAlmuerzo);
  e_cena = calculateEnergy(this.db_menu?.cena as ICena);

  d_desayuno_visible = false;
  d_almuerzo_visible = false;
  d_cena_visible = false;

  handleSHD = () => (this.d_desayuno_visible = !this.d_desayuno_visible);
  handleSHA = () => (this.d_almuerzo_visible = !this.d_almuerzo_visible);
  handleSHC = () => (this.d_cena_visible = !this.d_cena_visible);
}
