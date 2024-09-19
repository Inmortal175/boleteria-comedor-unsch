import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';
import { calculate_energy } from '../../../utils';
import { faHome, faChevronRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NgOptimizedImage, MenuOptionsComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faHome = faHome;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  data_menu = {
    id_menu: 1,
    nombre: 'nombre',
    fecha: '2017-05-25 17:39:15.014961-05',
    id_administrador: 1,
  };
  d_desayuno = {
    id_desayuno: 1,
    // bebible: undefined,
    bebible: 'cocoa, leche',
    acompaniamiento: 'pan con mermelada, aceituna',
    aditivo: 'pan',
    fruta_postre: 'papaya',
    image_url: 'https://picsum.photos/200/300?grayscale',
    carbohidratos: 32,
    proteinas: 23,
    grasas: 11,
    id_menu: 1,
  };
  d_desayuno_visible = true;
  d_almuerzo_visible = false;
  d_cena_visible = false;
  d_almuerzo = {
    id_almuerzo: 1,
    sopa_entrada: 'sopa de trigo',
    segundo: 'estofado de pescado, arroz',
    ensalada: 'lechuga, pepino, tomate',
    fruta: 'durazno',
    refresco: 'capuli',
    image_url: 'https://picsum.photos/seed/picsum/200/300',
    carbohidratos: 342,
    proteinas: 12,
    grasas: 65,
    id_menu: 1,
  };
  d_cena = {
    id_cena: 1,
    plato_principal: 'coliflor con pollo,arroz',
    postre: 'tiramisu',
    bebida: 'cocoa',
    image_url: 'https://picsum.photos/200/300/?blur',
    carbohidratos: 32,
    proteinas: 23,
    grasas: 65,
    id_menu: 1,
  };
  energy_desayuno = calculate_energy({
    carbohydrates: this.d_desayuno.carbohidratos,
    proteins: this.d_desayuno.proteinas,
    fats: this.d_desayuno.grasas,
  });
  energy_almuerzo = calculate_energy({
    carbohydrates: this.d_almuerzo.carbohidratos,
    proteins: this.d_almuerzo.proteinas,
    fats: this.d_almuerzo.grasas,
  });
  energy_cena = calculate_energy({
    carbohydrates: this.d_cena.carbohidratos,
    proteins: this.d_cena.proteinas,
    fats: this.d_cena.grasas,
  });
}
