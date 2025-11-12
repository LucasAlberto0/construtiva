import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Obra } from '../../models/obra.model';
import { ObrasService } from '../../services/obras.service';

@Component({
  selector: 'app-obras-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './obras-list.component.html',
  styleUrls: ['./obras-list.component.scss']
})
export class ObrasListComponent implements OnInit {
  obras$!: Observable<Obra[]>;

  constructor(private obrasService: ObrasService) {}

  ngOnInit(): void {
    this.obras$ = this.obrasService.getObras();
  }
}