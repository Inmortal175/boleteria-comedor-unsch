import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-options',
  standalone: true,
  imports: [],
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.css',
})
export class MenuOptionsComponent {
  itemsLeft = [
    { id: 1, text: 'ticket', path: 'ticket' },
    { id: 2, text: 'pase semanal', path: 'weekly-pass' },
    { id: 3, text: '[beca-comedor]', path: 'beca' },
  ];

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
