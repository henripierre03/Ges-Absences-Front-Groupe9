import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Justification } from '../models/justification.model';

@Injectable({
  providedIn: 'root'
})
export class JustificationService {
  private apiUrl = 'http://localhost:8080/api/justifications';

  constructor(private http: HttpClient) {}

  getJustificationById(id: string): Observable<Justification> {
    return this.http.get<Justification>(`${this.apiUrl}/${id}`);
  }

  validerJustification(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/valider`, {});
  }

  rejeterJustification(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/rejeter`, {});
  }
}
