import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-options',
  standalone: true,
  imports: [],
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.css',
})
export class MenuOptionsComponent {
  itemsLeft = [
    { id: 1, text: 'ticket' },
    { id: 2, text: 'pase semanal' },
    { id: 3, text: '[beca-comedor]' },
  ];
}
