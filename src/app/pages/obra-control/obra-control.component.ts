import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obra-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obra-control.component.html',
  styleUrls: ['./obra-control.component.scss']
})
export class ObraControlComponent {
  obraNome = 'Edifício Corporativo Central';
  statusTecnico = 'Fase de acabamento com 85% de conclusão.';

  historico = [
    {
      data: '2024-10-28',
      evento: 'Aditivo de Contrato 003',
      descricao: 'Adição de novo andar de escritórios.',
      tipo: 'aditivo'
    },
    {
      data: '2024-10-15',
      evento: 'Alteração de Projeto',
      descricao: 'Mudança no layout da fachada frontal.',
      tipo: 'alteracao'
    },
    {
      data: '2024-09-20',
      evento: 'Início da Fase de Alvenaria',
      descricao: 'Concluída a fundação, iniciada a alvenaria.',
      tipo: 'marco'
    },
    {
      data: '2024-08-01',
      evento: 'Aditivo de Contrato 002',
      descricao: 'Ajuste de cronograma devido a chuvas.',
      tipo: 'aditivo'
    }
  ];
}
