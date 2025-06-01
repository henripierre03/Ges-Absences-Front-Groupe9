import { UserRole } from './absence.model';

export interface User {

  id :string;
  nom :string;
  prenom :string;
  matricule: string;
  email :string;
  password :string;
  role : UserRole;
}

export interface LoginResponse {
  token: string;
  email: string;
  matricule: string;
  role: UserRole;
  type: string ;
}
