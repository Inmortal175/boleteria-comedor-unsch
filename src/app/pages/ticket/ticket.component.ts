import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTicket, faChevronRight, faChevronDown, faChartPie, faQrcode, faFloppyDisk, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, MenuOptionsComponent],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  faTicket = faTicket;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  faChartPie = faChartPie;
  faQrcode = faQrcode;
  faFloppyDisk = faFloppyDisk;
  faDollarSign = faDollarSign;
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
  dataReporNutricional = {
    id: '723beba9-cb44-497f-bcf3-4637746ba27e',
    field: ' Valor nutricional',
    details: {
      carbohydrates: '13 g',
      proteins: '25 g',
      fats: '45 g',
      energy: '600 Kcal',
    },
    image: 'example_url_image.com',
  };
}
