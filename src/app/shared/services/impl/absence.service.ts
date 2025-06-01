import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbsenceAndEtudiantResponse } from '../../models/absence.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private apiUrl = 'http://localhost:8080/api/web/absences';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les absences pour l'admin
  getAllAbsences(): Observable<AbsenceAndEtudiantResponse[]> {
    return this.http.get<AbsenceAndEtudiantResponse[]>(this.apiUrl);
  }

  // Récupérer les absences filtrées par état (optionnel)
  getAbsencesByEtat(etat: string): Observable<AbsenceAndEtudiantResponse[]> {
    return this.http.get<AbsenceAndEtudiantResponse[]>(`${this.apiUrl}?etat=${etat}`);
  }
}

