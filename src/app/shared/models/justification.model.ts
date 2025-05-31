export interface Justification {
  id: string;
  etudiantNom: string;
  date: string;
  raison: string;
  fichier?: string; // lien vers un fichier justificatif (ex : PDF/image)
  statut: 'EN_ATTENTE' | 'VALIDÉE' | 'REFUSÉE';
}
