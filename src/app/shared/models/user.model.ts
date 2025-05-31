import { UserRole } from './absence.model';

export interface LoginResponse {
  token: string;
  email: string;
  matricule: string;
  role: UserRole;
  type: string ;
}
