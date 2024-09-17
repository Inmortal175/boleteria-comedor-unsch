import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
  faChevronDown = faChevronDown;
  itemsLeft = [
    { id: 1, text: 'Ticket' },
    { id: 2, text: 'Pase Semanal' },
    { id: 3, text: '[beca-comedor]' },
  ];
  dataMenu = [
    {
      id: '6aca2b90-2333-4a36-83da-257c28cd65c4',
      field: 'desayuno',
      details: [
        {
          name: 'bebible',
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
      nutritional_value: {
        carbohydrates: '23 g',
        proteins: '45 g',
        fats: '80 g',
        energy: '675 Kcal',
      },
      image: 'example_url_image.com',
    },
    {
      id: 'aee8b5f4-7d4d-409e-b46b-9fc088dddfe6',
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
      nutritional_value: {
        carbohydrates: '33 g',
        proteins: '35 g',
        fats: '65 g',
        energy: '975 Kcal',
      },
      image: 'example_url_image.com',
    },
    {
      id: '723beba9-cb44-497f-bcf3-4637746ba27e',
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
      nutritional_value: {
        carbohydrates: '13 g',
        proteins: '25 g',
        fats: '45 g',
        energy: '600 Kcal',
      },
      image: 'example_url_image.com',
    },
  ];
}
