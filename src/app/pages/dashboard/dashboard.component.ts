import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  statusCards = [
    { title: 'Em andamento', count: 5, color: '#007bff' },
    { title: 'Manutenção', count: 2, color: '#ffc107' },
    { title: 'Suspensos', count: 1, color: '#6c757d' },
    { title: 'Finalizados', count: 12, color: '#28a745' }
  ];
}
