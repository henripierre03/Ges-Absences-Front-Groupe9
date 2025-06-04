import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import {
  Justification,
  JustificationResponse,
} from '../../models/justification.model';
import { RestResponse } from '../../models/rest-response.model';

@Injectable({
  providedIn: 'root',
})
export class JustificationService {
  constructor(private http: HttpClient) {}

  getJustificationById(id: string): Observable<Justification> {
    return this.http.get<Justification>(`${environment.apiUrl}/${id}`);
  }

  validerJustification(id: string): Observable<void> {
    const body = { id, validation: true }; // Include the request body
    return this.http.put<void>(`${environment.apiUrl}/${id}`, body); // Update the endpoint URL
  }
  invaliderJustification(id: string): Observable<void> {
    const body = { id, validation: false }; // Include the request body
    return this.http.put<void>(`${environment.apiUrl}/${id}`, body); // Update the endpoint URL
  }

  getAbsenceJustification(
    absenceId: string
  ): Observable<RestResponse<JustificationResponse>> {
    return this.http.get<RestResponse<JustificationResponse>>(
      `${environment.apiUrl}/absence/${absenceId}`
    );
  }
}
