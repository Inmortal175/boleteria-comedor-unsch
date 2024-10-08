import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';
import { faPalette, faClock, faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faPalette = faPalette;
  faClock = faClock;
  user_img = 'https://i.pravatar.cc/150';
  faHome = faHome;
  faChevronRight = faChevronRight;

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
