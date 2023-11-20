import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }

  getAuthToken(): string {
    const token = `Bearer ${localStorage.getItem('authToken')}`;
    return token;
  }

  verifyTokenIsNull(token: string): boolean {
    console.log(token.split(" ")[1]);
    if (token.split(" ")[1] === 'null') { // Splitting token "Bearer "
      
      console.log("Sim é null");
      return true;
    }
    return false;
  }

}
