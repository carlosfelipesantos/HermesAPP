import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  kpis = [
    { label: 'Fretes no mês', value: '128' },
    { label: 'Em andamento', value: '14' },
    { label: 'Finalizados', value: '102' },
    { label: 'Cancelados', value: '12' },
  ];

  latest = [
    { id: 'FR-1029', status: 'Em andamento', origem: 'SP', destino: 'RJ', valor: 'R$ 1.250,00' },
    { id: 'FR-1028', status: 'Finalizado', origem: 'MG', destino: 'SP', valor: 'R$ 980,00' },
    { id: 'FR-1027', status: 'Cancelado', origem: 'PR', destino: 'SC', valor: 'R$ 430,00' },
  ];
}
