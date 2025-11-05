import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-obra-diary',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './obra-diary.component.html',
  styleUrls: ['./obra-diary.component.scss']
})
export class ObraDiaryComponent {
  obraNome = 'Edifício Corporativo Central';
  diario = [
    {
      data: '2024-10-28',
      clima: 'Ensolarado, 28°C',
      equipe: '15 colaboradores presentes',
      atividades: 'Concretagem da laje do 5º andar. Instalação de painéis de vidro na fachada oeste.',
      fotos: ['foto1.jpg', 'foto2.jpg']
    },
    {
      data: '2024-10-27',
      clima: 'Nublado, 24°C',
      equipe: '14 colaboradores presentes',
      atividades: 'Montagem da estrutura metálica para o 6º andar.',
      fotos: []
    }
  ];
}
