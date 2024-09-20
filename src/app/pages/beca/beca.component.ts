import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-beca',
  standalone: true,
  imports: [NavbarComponent, MenuOptionsComponent, FontAwesomeModule],
  templateUrl: './beca.component.html',
  styleUrl: './beca.component.css',
})
export class BecaComponent {}
