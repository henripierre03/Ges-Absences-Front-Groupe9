import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Justification } from '../models/justification.model';

@Injectable({ providedIn: 'root' })
export class JustificationService {
  private apiUrl = 'http://localhost:8080/api/justifications';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Justification[]> {
    return this.http.get<Justification[]>(this.apiUrl);
  }

  valider(id: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/valider`, {});
  }

  invalider(id: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/refuser`, {});
  }
}
