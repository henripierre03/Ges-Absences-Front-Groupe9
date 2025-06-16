import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthentificationService } from './impl/authentification.service';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthentificationService);

  return next(req).pipe(
    catchError(error => {
      if (error.status === 403) {
        // Déconnexion automatique en cas d'erreur 401
        authService.Logout();
        window.location.href = '/security';
      }
      return throwError(() => error);
    })
  );
};