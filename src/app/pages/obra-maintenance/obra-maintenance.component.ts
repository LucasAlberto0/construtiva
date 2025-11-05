import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obra-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obra-maintenance.component.html',
  styleUrls: ['./obra-maintenance.component.scss']
})
export class ObraMaintenanceComponent {
  obraNome = 'Edifício Corporativo Central';
  manutencoes = [
    {
      data: '2024-10-05',
      descricao: 'Verificação do sistema de ar condicionado.',
      responsavel: 'Equipe Técnica HVAC'
    },
    {
      data: '2024-09-07',
      descricao: 'Inspeção e limpeza dos elevadores.',
      responsavel: 'Manutenção Predial'
    },
    {
      data: '2024-08-04',
      descricao: 'Revisão do sistema elétrico geral.',
      responsavel: 'Eletricista Contratado'
    }
  ];
}
