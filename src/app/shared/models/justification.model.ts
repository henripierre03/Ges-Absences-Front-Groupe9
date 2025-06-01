export interface Justification {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  numero: string;
  matricule: string;
  niveau: string;
  filiere: string;
  classe: string;
  cours: string;
  salle: string;
  justificationTexte: string;
  fichierUrl: string;
  date: string;
  etat: 'en_attente' | 'valide' | 'refuse';
}
