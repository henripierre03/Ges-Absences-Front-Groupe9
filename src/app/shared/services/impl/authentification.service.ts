import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/user.model';
import { IAuthService } from '../IAuthService';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService implements IAuthService {

  
  constructor() {}
  Login(login: string, password: string): Observable<LoginResponse> {
    throw new Error('Method not implemented.');
  }
  Logout(): void {
    throw new Error('Method not implemented.');
  }
  IsAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }
  hasRole(role: string): boolean {
    throw new Error('Method not implemented.');
  }
}
