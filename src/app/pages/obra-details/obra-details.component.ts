import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-obra-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './obra-details.component.html',
  styleUrls: ['./obra-details.component.scss']
})
export class ObraDetailsComponent {
  obra = {
    id: 1,
    nome: 'Edifício Corporativo Central',
    localizacao: 'Av. Paulista, 1000, São Paulo, SP',
    contratante: 'Empresa XYZ',
    contrato: 'CTR-2024-001',
    os: 'OS-2024-123',
    equipe: ['João Silva (Gerente)', 'Maria Oliveira (Engenheira)', 'Carlos Pereira (Arquiteto)']
  };
}
