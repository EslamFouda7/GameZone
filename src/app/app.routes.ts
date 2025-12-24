import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/landing/landing').then(c => c.Landing), },
     { path: 'games', loadComponent: () => import('./pages/games/games').then(c => c.Games), },
      { path: 'favorites', loadComponent: () => import('./pages/favorites/favorites').then(c => c.Favorites), },
];
