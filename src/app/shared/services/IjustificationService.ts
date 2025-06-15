import { Observable } from "rxjs";
import { AbsenceAndEtudiantResponse } from "../models/absence.model";

export interface IjustificationService {
    getAbsenceJustification(absenceId: string): Observable<AbsenceAndEtudiantResponse>;
}
