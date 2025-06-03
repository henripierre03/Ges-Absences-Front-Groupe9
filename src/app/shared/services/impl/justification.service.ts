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
    const body = { id, validation: true }; // Include the request body
    return this.http.put<void>(`${this.apiUrl}/${id}`, body); // Update the endpoint URL
  }
  invaliderJustification(id: string): Observable<void> {
    const body = { id, validation: false }; // Include the request body
    return this.http.put<void>(`${this.apiUrl}/${id}`, body); // Update the endpoint URL
  }

  getAbsenceJustification(absenceId: string): Observable<RestResponse<JustificationResponse>> {
    return this.http.get<RestResponse<JustificationResponse>>(`${this.apiUrl}/absence/${absenceId}`);
  }

}
