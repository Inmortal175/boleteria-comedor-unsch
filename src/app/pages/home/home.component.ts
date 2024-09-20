import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';
import { calculate_energy } from '../../../utils';
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
  d_desayuno = this.Menu[4].desayuno;

  d_almuerzo = this.Menu[4].almuerzo;

  d_cena = this.Menu[4].cena;

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

  d_desayuno_visible = false;
  d_almuerzo_visible = false;
  d_cena_visible = false;

  handleSHD = () => (this.d_desayuno_visible = !this.d_desayuno_visible);
  handleSHA = () => (this.d_almuerzo_visible = !this.d_almuerzo_visible);
  handleSHC = () => (this.d_cena_visible = !this.d_cena_visible);
}
