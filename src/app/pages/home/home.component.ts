import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faHome = faHome;
  faChevronRight = faChevronRight;
  itemsLeft = [
    { id: 1, text: 'Ticket' },
    { id: 2, text: 'Pase Semanal' },
    { id: 3, text: '[beca-comedor]' },
  ];
  dataMenu = [
    {
      field: 'desayuno',
      details: [
        {
          name: 'Bebible',
          value: ['cocoa', 'leche'],
        },
        {
          name: 'acompañamiento',
          value: ['pan con mermelada', 'aceituna'],
        },
        {
          name: 'aditivo',
          value: 'pan',
        },
        {
          name: 'fruta / postre',
          value: 'papaya',
        },
      ],
      iamge: 'example_url_image.com',
    },
    {
      field: 'almuerzo',
      details: [
        {
          name: 'sopa de entrada',
          value: 'sopa de trigo',
        },
        {
          name: 'segundo',
          value: ['estofado de pescado', 'arroz'],
        },
        {
          name: 'ensalada',
          value: ['lechuga', 'pepino', 'tomate'],
        },
        {
          name: 'fruta / postre',
          value: 'durazno',
        },
        {
          name: 'refresco',
          value: 'capuli',
        },
      ],
      iamge: 'example_url_image.com',
    },
    {
      field: 'cena',
      details: [
        {
          name: 'palto principal',
          value: ['coliflor con pollo', 'arroz'],
        },
        {
          name: 'postre',
          value: 'tiramisu',
        },
        {
          name: 'bebida',
          value: 'cocoa',
        },
      ],
      iamge: 'example_url_image.com',
    },
  ];
}
