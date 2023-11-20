import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { AuthServiceService } from './services/auth/auth-service.service';
import { TokenResponseDTO } from './entities/token-dto/TokenResponseDTO';

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

  constructor( private rout: Router,private authService: AuthServiceService) {}

  ngOnInit() {
    const token = this.authService.getAuthToken();
    if (this.authService.verifyTokenIsNull(token)) {
      this.rout.navigate(['/login']);
    }
  }

  search() {
    const title = this.searchValue.trim();
      this.rout.navigate(['/result'], { queryParams: { title}});
      }
    }
  
