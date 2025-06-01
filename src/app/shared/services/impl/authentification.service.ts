import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { RestResponse } from '../../models/rest-response.model';
import { LoginResponse } from '../../models/user.model';
import { IAuthService } from '../IAuthService';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService implements IAuthService {
  currentUserSignal = signal<LoginResponse | null>(null);

  constructor(private readonly httpClient: HttpClient) {}

  hasRole(role: string): boolean {
    return this.IsAuthenticated() && this.currentUserSignal()?.role === role;
  }

  Login(
    login: string,
    password: string
  ): Observable<RestResponse<LoginResponse>> {
    let result: Observable<RestResponse<LoginResponse>> = this.httpClient.post<
      RestResponse<LoginResponse>
    >(`${environment.apiUrl}/auth/login`, {
      email: login,
      password: password,
    });
    result.subscribe((response) => {
      this.currentUserSignal.set(response.result);
      // localStorage.setItem('user', JSON.stringify(response.result));
    });
    return result;
  }

  Logout(): void {
    this.currentUserSignal.set(null);
  }
  IsAuthenticated(): boolean {
    return !!this.currentUserSignal();
  }
}
