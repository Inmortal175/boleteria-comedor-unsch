import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { WeeklyPassComponent } from './pages/weekly-pass/weekly-pass.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { BecaComponent } from './pages/beca/beca.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'weekly-pass', component: WeeklyPassComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'beca', component: BecaComponent },
];
