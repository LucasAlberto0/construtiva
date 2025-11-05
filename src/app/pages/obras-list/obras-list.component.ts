import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-obras-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './obras-list.component.html',
  styleUrls: ['./obras-list.component.scss']
})
export class ObrasListComponent {
  obras = [
    {
      id: 1,
      nome: 'Edifício Corporativo Central',
      localizacao: 'São Paulo, SP',
      status: 'Em andamento',
      statusColor: '#007bff'
    },
    {
      id: 2,
      nome: 'Residencial Vista Verde',
      localizacao: 'Rio de Janeiro, RJ',
      status: 'Finalizados',
      statusColor: '#28a745'
    },
    {
      id: 3,
      nome: 'Manutenção Ponte Estaiada',
      localizacao: 'São Paulo, SP',
      status: 'Manutenção',
      statusColor: '#ffc107'
    },
    {
      id: 4,
      nome: 'Shopping Center Norte',
      localizacao: 'Belo Horizonte, MG',
      status: 'Suspensos',
      statusColor: '#6c757d'
    }
  ];
}
