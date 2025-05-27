export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  matricule: string;
  qrCode: string;
  classe: Classe;
  filiere: Filiere;
  niveau: Niveau;
  abscences: Abscence[];
}

export interface Classe {
  id: number;
  nomClasse: string;
}

export interface Filiere {
  id: number;
  nomFiliere: string;
}

export interface Niveau {
  id: number;
  nomNieau: string;
}

export interface Salle {
  id: number;
  nom: string;
}


export interface Abscence {
  id: number;
  typeAbscence: string;
  cours: Cours;
  justification?: AbscenceJustification;
}

export interface AbscenceJustification {
  id: number;
  message: string;
  validation: boolean;
}

export interface Cours {
  id: number;
  nomCours: string;
  module: Module;
  salle: Salle;
}


export type Module="Flutter" | "Java" | "Python" | "C++" | "JavaScript";
