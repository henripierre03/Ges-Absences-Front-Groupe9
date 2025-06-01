import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { AbsenceAndEtudiantResponse } from '../../models/absence.model';
import { IAbsenceService } from '../IAbsenceService';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService
  extends GenericService<AbsenceAndEtudiantResponse>
  implements IAbsenceService
{
  constructor(private readonly HttpClient: HttpClient) {
    super(HttpClient, 'absence');
  }

  getAllAbsences(): Observable<AbsenceAndEtudiantResponse[]> {
    return this.httpClient.get<AbsenceAndEtudiantResponse[]>(
      `${environment.apiUrl}/absence`
    );
  }
}
