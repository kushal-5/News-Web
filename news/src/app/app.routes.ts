import { Routes } from '@angular/router';
import { News } from './pages/news/news';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Latest } from './pages/latest/latest';
import { Sport } from "./pages/sport/sport";
import { Health } from './pages/health/health';
import { AuthGuard } from './guard/auth.guard';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

  // PUBLIC ROUTES
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // PROTECTED ROUTES
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: 'news', component: News, canActivate: [AuthGuard] },
  { path: 'latest', component: Latest, canActivate: [AuthGuard] },
  { path: 'sport', component: Sport, canActivate: [AuthGuard] },
  { path: 'health', component: Health, canActivate: [AuthGuard] },
  { path: 'contact', component: Contact, canActivate: [AuthGuard] },

 

  // DEFAULT ROUTE
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 404 page
  {path: '**', component: NotFound}
];