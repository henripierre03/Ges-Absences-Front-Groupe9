import { Observable } from "rxjs";
import { LoginResponse } from "../models/user.model";

export interface IAuthService {
  Login(login: string, password: string): Observable<LoginResponse>;
  Logout(): void;
  IsAuthenticated(): boolean;
  hasRole(role: string): boolean;
}
