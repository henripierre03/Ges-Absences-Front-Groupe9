import { Justification } from "./justification.model";

// export interface AbsenceAndEtudiantResponse {
//   id: string;
//   date: Date;
//   typeAbsence: string;
//   courId: string;
//   etudiant: EtudiantAllResponse;
// }

export interface EtudiantAllResponse {
  id: string;
  nom: string;
  prenom: string;
  matricule: string;
  email: string;
  role: UserRole;
  filiere: Filiere;
  niveau: Niveau;
  classeId: string | null;
}

export interface EtudiantAndAbsenceResponse {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: UserRole;
  absenceId: string;
}

export interface AbsenceAndEtudiantResponse {
  id: string;
  date: Date;
  typeAbsence: string;
  courId: string;
  etudiant: EtudiantAllResponse;
  justification: Justification;
}

export type UserRole = 'ETUDIANT' | 'VIGILE' | 'ADMIN';
export type Filiere = 'GLRS' | 'IAGE' | 'TTL' | 'MAE' | 'CDSD';
export type Niveau = 'L1' | 'L2' | 'L3' | 'M1' | 'M2';
export type TypeAbsence = 'PRESENCE' | 'ABSENCE' | 'RETARD';
