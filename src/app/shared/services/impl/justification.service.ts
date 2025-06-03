import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Justification, JustificationResponse } from '../../models/justification.model';
import { AbsenceAndEtudiantResponse } from '../../models/absence.model';
import { RestResponse } from '../../models/rest-response.model';

@Injectable({
  providedIn: 'root'
})
export class JustificationService {
  private apiUrl = 'https://ges-absences.onrender.com/api/web/justification';

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

  getAbsenceJustification(absenceId: number): Observable<RestResponse<JustificationResponse>> {
    return this.http.get<RestResponse<JustificationResponse>>(`${this.apiUrl}/absence/${absenceId}`);
  }

}
