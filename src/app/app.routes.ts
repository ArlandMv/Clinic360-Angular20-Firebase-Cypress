import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Dashboard } from './features/dashboard/dashboard';
import { About } from './features/about/about';

export const routes: Routes = [
  { path: '',          redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',     component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'about',     component: About },
  //{ path: '**',        redirectTo: 'home' },
];

/*
export const appRoutes: Route[] = [
  // Redirige al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Rutas públicas (login)
  ...publicRoutes,

  // Ruta padre “app” que agrupa dashboard y about
  {
    path: 'app',
    // Aquí colgamos child routes en un solo bundle lazy:
    children: [
      // redirige /app → /app/dashboard
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      ...dashboardRoutes,
      ...aboutRoutes
    ]
  },

  // Todo lo demás regresa a login
  { path: '**', redirectTo: 'login' }
];*/