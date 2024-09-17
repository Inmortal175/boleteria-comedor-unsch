import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
// please modularize: auth -> sign-in & sign-up (not aprobe -only administrator register new users)

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { WeeklyPassComponent } from './pages/weekly-pass/weekly-pass.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'weekly-pass', component: WeeklyPassComponent },
];
