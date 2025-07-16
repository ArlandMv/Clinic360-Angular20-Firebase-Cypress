import { Component } from '@angular/core';
import { CitasChart } from "../dashboard/components/citas-chart/citas-chart";

@Component({
  selector: 'app-home',
  imports: [CitasChart],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
