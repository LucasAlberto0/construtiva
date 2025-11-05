import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-obra-checklists',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './obra-checklists.component.html',
  styleUrls: ['./obra-checklists.component.scss']
})
export class ObraChecklistsComponent {
  obraNome = 'Edifício Corporativo Central';

  checklistInicio = [
    { id: 'inicio1', label: 'Documentação do terreno regularizada', checked: true },
    { id: 'inicio2', label: 'Alvará de construção emitido', checked: true },
    { id: 'inicio3', label: 'Instalações provisórias (água, luz) concluídas', checked: true },
    { id: 'inicio4', label: 'Canteiro de obras cercado e sinalizado', checked: false }
  ];

  checklistEntrega = [
    { id: 'entrega1', label: 'Limpeza final da obra concluída', checked: true },
    { id: 'entrega2', label: 'Sistemas (elétrico, hidráulico) testados', checked: true },
    { id: 'entrega3', label: 'Pintura e acabamentos finalizados', checked: false },
    { id: 'entrega4', label: 'Documento \'As Built\' preparado', checked: false }
  ];

  getProgresso(checklist: any[]): number {
    const concluidos = checklist.filter(item => item.checked).length;
    return (concluidos / checklist.length) * 100;
  }
}
