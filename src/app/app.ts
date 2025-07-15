import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,Navbar,Home,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'reportes360';
}
