import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  generatePdf(): void {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text('Reporte de Citas Clínicas', 10, 20);

  doc.setFontSize(12);
  doc.text('Este es un reporte generado dinámicamente usando jsPDF.', 10, 30);
  doc.text('Datos de ejemplo de agendamientos y asistencias.', 10, 40);

  const head = [['Fecha', 'Agendadas', 'Asistidas']];
  const body: string[][] = [
    ['2024-01-01', '15', '12'],
    ['2024-01-02', '20', '18'],
    ['2024-01-03', '10', '9'],
    ['2024-01-04', '25', '20'],
    ['2024-01-05', '18', '15'],
  ];

  autoTable(doc, {
    head: head,
    body: body,
    startY: 50,
    theme: 'striped',
    styles: {
      fontSize: 10,
      cellPadding: 3,
      halign: 'center'
    },
    headStyles: {
      fillColor: '#2563eb', // blue-600
      textColor: '#ffffff',
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: '#eff6ff' // blue-50
    }
  });

  doc.save('reporte_citas.pdf');
  }
}