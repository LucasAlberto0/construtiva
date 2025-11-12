import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obra, ObraDetails } from '../models/obra.model';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {
  private apiUrl = 'http://localhost:5262/api/obras';

  constructor(private http: HttpClient) { }

  getObras(): Observable<Obra[]> {
    return this.http.get<Obra[]>(this.apiUrl);
  }

  getObraById(id: string): Observable<ObraDetails> {
    return this.http.get<ObraDetails>(`${this.apiUrl}/${id}`);
  }

  // Future methods for other obra sections can be added here
  // e.g., getObraControl(id), getObraDocuments(id), etc.
}