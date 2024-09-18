import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuOptionsComponent } from '../../components/menu-options/menu-options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weekly-pass',
  standalone: true,
  imports: [NavbarComponent, MenuOptionsComponent, FontAwesomeModule],
  templateUrl: './weekly-pass.component.html',
  styleUrl: './weekly-pass.component.css',
})
export class WeeklyPassComponent {
  faHome = faHome;
  faChevronRight = faChevronRight;
}
