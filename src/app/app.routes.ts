import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Ricky&Morty',
  },
  {
    path: '**',
    component: AppComponent,
    title: 'Ricky&Morty red***',
  },
];
