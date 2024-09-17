import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
// please modularize: auth -> sign-in & sign-up (not aprobe -only administrator register new users)

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TicketComponent } from './pages/ticket/ticket.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'ticket', component: TicketComponent },
];
