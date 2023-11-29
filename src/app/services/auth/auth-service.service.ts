import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private cookieService: CookieService) { }

  setTokenInCookies(token: string): void {
    this.cookieService.set("authToken", token);

  }

  getAuthToken(): string {
    const token = `Bearer ${this.cookieService.get('authToken')}`;
    return token;
  
  }

  removeAuthToken(): void {
    this.cookieService.delete("authToken");
  }

  verifyTokenIsNull(token: string): boolean {
    const tokenSplited = token.split(" ")[1];
    if (tokenSplited === "") { // Verify if token is empty
      return true;
    }
    return false;
  }

}
