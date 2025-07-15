import { Component } from '@angular/core';
import { CitasChart } from './components/citas-chart/citas-chart';

@Component({
  selector: 'app-dashboard',
  imports: [CitasChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
}