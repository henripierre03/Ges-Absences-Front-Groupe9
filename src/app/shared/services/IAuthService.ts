import { Observable } from "rxjs";
import { LoginResponse } from "../models/user.model";
import { RestResponse } from "../models/rest-response.model";

export interface IAuthService {
  Login(login: string, password: string): Observable<RestResponse<LoginResponse>>;
  Logout(): void;
  IsAuthenticated(): boolean;
  hasRole(role: string): boolean;
}
