import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })

  export class AuthService {
    constructor(){}
    
    getAuthToken() {
        return localStorage.getItem('authToken');
    }
    isUserLoggedin() {
        return this.getAuthToken() !== null;
    }
  }