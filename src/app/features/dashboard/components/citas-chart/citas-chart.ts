import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { DataZoomComponent, GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

import { MOCK_CITAS_DATA } from '../../../../api/citas.mock';
import { CitaData } from '../../../../api/cita.model';

echarts.use([
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DataZoomComponent,
  CanvasRenderer
]);

@Component({
  selector: 'app-citas-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './citas-chart.html',
  styleUrl: './citas-chart.css',
  providers: [provideEchartsCore({echarts})],
})
export class CitasChart implements OnInit{
  chartOption!: EChartsOption;

  ngOnInit(): void {
    const fechas = MOCK_CITAS_DATA.map(item => item.date);
    const reservas = MOCK_CITAS_DATA.map(item => item.reservations);
    const asistencias = MOCK_CITAS_DATA.map(item => item.attended);

    this.chartOption = {
      title: {
        text: 'Citas Programadas y Asistidas',
        left: 'center',
        textStyle: { color: '#333' }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Reservas', 'Asistencias'],
        top: 30
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: fechas
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
        {
          start: 0,
          end: 100
        }
      ],
      series: [
        {
          name: 'Reservas',
          type: 'line',
          data: reservas,
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#3B82F6' }
        },
        {
          name: 'Asistencias',
          type: 'line',
          data: asistencias,
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#10B981' }
        }
      ]
    };
  }

}
