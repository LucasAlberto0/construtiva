import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ObraDetails } from '../../models/obra.model';
import { ObrasService } from '../../services/obras.service';

@Component({
  selector: 'app-obra-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './obra-details.component.html',
  styleUrls: ['./obra-details.component.scss']
})
export class ObraDetailsComponent implements OnInit {
  obra$!: Observable<ObraDetails>;

  constructor(
    private route: ActivatedRoute,
    private obrasService: ObrasService
  ) {}

  ngOnInit(): void {
    this.obra$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id) {
          return this.obrasService.getObraById(id);
        }
        // Handle case where id is null, maybe return an empty observable or throw error
        // For now, we assume id is always present
        return new Observable<ObraDetails>(); // Or handle error appropriately
      })
    );
  }
}