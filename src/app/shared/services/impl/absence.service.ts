import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { AbsenceAndEtudiantResponse } from '../../models/absence.model';
import { RestResponse } from '../../models/rest-response.model';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  // private apiUrl = 'https://ges-absences.onrender.com/api/web/absence'; // URL de l'API des absences

  constructor(private http: HttpClient) {}

  // Récupérer toutes les absences pour l'admin
  getAllAbsences(): Observable<RestResponse<AbsenceAndEtudiantResponse[]>> {
    return this.http.get<RestResponse<AbsenceAndEtudiantResponse[]>>(
      `${environment.apiUrl}`
    );
  }

  // Récupérer les absences filtrées par état (optionnel)
  getAbsencesByEtat(etat: string): Observable<AbsenceAndEtudiantResponse[]> {
    return this.http.get<AbsenceAndEtudiantResponse[]>(
      `${environment.apiUrl}/?etat=${etat}`
    );
  }
}
