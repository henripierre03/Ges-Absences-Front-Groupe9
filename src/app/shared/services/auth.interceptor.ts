import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const userStr = localStorage.getItem('user');
  
  if (userStr) {
    const user = JSON.parse(userStr);
    if (user?.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
  }
  
  return next(req);
};