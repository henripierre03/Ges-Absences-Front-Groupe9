import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbsenceAndEtudiantResponse } from '../../models/absence.model';
import { RestResponse } from '../../models/rest-response.model';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  private apiUrl = 'https://ges-absences.onrender.com/api/web/absence';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les absences pour l'admin
  getAllAbsences(): Observable<RestResponse<AbsenceAndEtudiantResponse[]>> {
    return this.http.get<RestResponse<AbsenceAndEtudiantResponse[]>>(this.apiUrl);
  }

  // Récupérer les absences filtrées par état (optionnel)
  getAbsencesByEtat(etat: string): Observable<AbsenceAndEtudiantResponse[]> {
    return this.http.get<AbsenceAndEtudiantResponse[]>(`${this.apiUrl}?etat=${etat}`);
  }
}

