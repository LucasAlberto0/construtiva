import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obra-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obra-documents.component.html',
  styleUrls: ['./obra-documents.component.scss']
})
export class ObraDocumentsComponent {
  obraNome = 'Edifício Corporativo Central';
  folders = [
    { name: 'Contratos', icon: '📄' },
    { name: 'Projetos', icon: '🏗️' },
    { name: 'Relatórios', icon: '📊' }
  ];
  files = [
    { name: 'contrato_principal_v2.pdf', folder: 'Contratos', size: '2.5 MB' },
    { name: 'planta_eletrica_rev3.dwg', folder: 'Projetos', size: '15.2 MB' },
    { name: 'relatorio_fotografico_out24.pdf', folder: 'Relatórios', size: '8.1 MB' },
    { name: 'aditivo_003.pdf', folder: 'Contratos', size: '1.1 MB' }
  ];
  selectedFolder = 'Contratos';

  selectFolder(folderName: string) {
    this.selectedFolder = folderName;
  }

  getFilesInSelectedFolder() {
    return this.files.filter(f => f.folder === this.selectedFolder);
  }
}
