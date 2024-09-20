import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';
import { calculate_energy, getMenuByDay } from '../../../utils';
import { faHome, faChevronRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';

import menu from '../../../assets/db/menu.json';
import { IMenu } from '../../../interfaz';

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

  Menu: IMenu[] = menu;

  curent_day = '2024-09-02';
  img_default_food = 'https://picsum.photos/seed/picsum/200/300';
  db_menu = getMenuByDay(this.Menu, this.curent_day);

  d_desayuno = this.db_menu?.desayuno;

  d_almuerzo = this.db_menu?.almuerzo;

  d_cena = this.db_menu?.cena;

  energy_desayuno = calculate_energy({
    carbohidratos: this.d_desayuno?.carbohidratos || 0,
    proteinas: this.d_desayuno?.proteinas || 0,
    grasas: this.d_desayuno?.grasas || 0,
  });
  energy_almuerzo = calculate_energy({
    carbohidratos: this.d_almuerzo?.carbohidratos || 0,
    proteinas: this.d_almuerzo?.proteinas || 0,
    grasas: this.d_almuerzo?.grasas || 0,
  });
  energy_cena = calculate_energy({
    carbohidratos: this.d_cena?.carbohidratos || 0,
    proteinas: this.d_cena?.proteinas || 0,
    grasas: this.d_cena?.grasas || 0,
  });

  d_desayuno_visible = false;
  d_almuerzo_visible = false;
  d_cena_visible = false;

  handleSHD = () => (this.d_desayuno_visible = !this.d_desayuno_visible);
  handleSHA = () => (this.d_almuerzo_visible = !this.d_almuerzo_visible);
  handleSHC = () => (this.d_cena_visible = !this.d_cena_visible);
}
