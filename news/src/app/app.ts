import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,   
    Footer
    
  ],
  template: `
    <app-header></app-header>

    <router-outlet></router-outlet>

    <app-footer></app-footer>


   
  `,
  styleUrls: ['./app.css']
})
export class App {
  
}