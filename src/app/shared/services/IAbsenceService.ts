import { Observable } from "rxjs";
import { AbsenceAndEtudiantResponse } from "../models/absence.model";

export interface IAbsenceService{
  getAllAbsences(): Observable<AbsenceAndEtudiantResponse[]>;
  
  getAbsencesByEtat(etat: string): Observable<AbsenceAndEtudiantResponse[]>;
}