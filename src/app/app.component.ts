import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from './auth/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Catvie';
  searchValue!: string;
  movies: any[] = [];
  topFilms: any[] = []; 
  token: string = '';

  constructor( private rout: Router,private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.isUserLoggedin()) {
      this.rout.navigate(['/login']);
    }
  }

  search() {
    const title = this.searchValue.trim();
      this.rout.navigate(['/result'], { queryParams: { title}});
        
      }
    }
  
