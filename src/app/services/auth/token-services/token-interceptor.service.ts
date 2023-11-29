import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('api/auth/v1')) {
      if (!req.headers.has("Authorization")) {
        const token = this.authService.getAuthToken();

        // Configuração das opções de requisição
        const authReq = req.clone({
          setHeaders: {
            Authorization: token
          }
        });

        return next.handle(authReq).pipe(
          tap(event => {
            if (event instanceof HttpResponse) {
              console.log('log from interceptor success block');
            }
          }),
          catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
              console.log('log from interceptor error block');
            }
            return throwError(error);
          })
        );
      }
      return next.handle(req);
    }  else {
      return next.handle(req);
    }
  }
}
