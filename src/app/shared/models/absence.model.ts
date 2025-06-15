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
  classe: Classe
}

export interface Classe {
  id: string;
  nom: string;
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
  cour: Cours;
  etudiant: EtudiantAllResponse;
  justification: Justification;
}


export interface AbsenceResponse {
  id: string;
  date: Date;
  typeAbsence: TypeAbsence;
  cours: Cours;
}

export interface Salle {
  id: string;
  nom: string;
}


export interface Cours {
  id?: string;
  module?: string;
  salle?: Salle;
}
export type UserRole = 'ETUDIANT' | 'VIGILE' | 'ADMIN';
export type Filiere = 'GLRS' | 'IAGE' | 'TTL' | 'MAE' | 'CDSD';
export type Niveau = 'L1' | 'L2' | 'L3' | 'M1' | 'M2';
export type TypeAbsence = 'PRESENCE' | 'ABSENCE' | 'RETARD';
