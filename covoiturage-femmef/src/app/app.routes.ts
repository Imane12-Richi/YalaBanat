import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/public/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/public/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
 
  {
    path: 'passager',
    loadChildren: () =>
      import('./features/passager/passager.routes').then((m) => m.PASSAGER_ROUTES),
  },
  {
    path: 'recherche',
    loadChildren: () =>
      import('./pages/recherche/recherche.module').then((m) => m.RechercheModule),
  },
];
