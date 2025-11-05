import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obra-collaboration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obra-collaboration.component.html',
  styleUrls: ['./obra-collaboration.component.scss']
})
export class ObraCollaborationComponent {
  obraNome = 'Edifício Corporativo Central';
  comentarios = [
    {
      autor: 'Maria Oliveira',
      data: '2024-10-28, 14:30',
      texto: 'Atenção à instalação dos painéis de vidro. Precisamos garantir a vedação correta conforme o projeto.',
      isCurrentUser: false
    },
    {
      autor: 'João Silva',
      data: '2024-10-28, 15:05',
      texto: 'Recebido, Maria. Vou supervisionar pessoalmente a equipe de instalação amanhã de manhã.',
      isCurrentUser: true
    },
    {
      autor: 'Fiscal da Obra',
      data: '2024-10-29, 09:15',
      texto: 'Solicito o relatório de conformidade dos materiais entregues ontem.',
      isCurrentUser: false
    }
  ];
}
