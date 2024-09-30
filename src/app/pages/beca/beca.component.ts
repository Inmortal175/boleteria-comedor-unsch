import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';
import { faChevronDown, faChevronUp, faCalendarDay, faQrcode, faChartPie, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beca',
  standalone: true,
  imports: [NavbarComponent, MenuOptionsComponent, FontAwesomeModule, NgOptimizedImage],
  templateUrl: './beca.component.html',
  styleUrl: './beca.component.css',
})
export class BecaComponent {
  faRotate = faRotate;
  faPlus = faPlus;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faChartPie = faChartPie;
  faCalendarDay = faCalendarDay;
  faQrcode = faQrcode;
  itemsLeft = [
    { id: 1, text: 'Ticket' },
    { id: 2, text: 'Pase Semanal' },
    { id: 3, text: '[beca-comedor]' },
  ];
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
    },
  ];
  dataPaseSemanal = [
    {
      id: 'aee8b5f4-7d4d-409e-b46b-9fc088dddfe6',
      field: 'generar pase semanal',
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
          name: 'Fecha',
          value: '13/10/2014 -18/10/2024',
        },
        {
          name: 'Código de ticket',
          value: '23453',
        },
      ],
    },
  ];
  dataReporNutricional = {
    id: '723beba9-cb44-497f-bcf3-4637746ba27e',
    field: ' Valor nutricional',
    details: {
      carbohydrates: '13 g',
      proteins: '25 g',
      fats: '45 g',
      energy: '600 Kcal',
    },
    image: 'https://www.redalyc.org/journal/4867/486771907007/2448-9190-ram-67-04-381-gf4.png',
  };
}
