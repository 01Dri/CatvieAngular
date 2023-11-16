import { Component } from '@angular/core';
import {Router } from '@angular/router';

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
  constructor( private rout: Router) {}

  ngOnInit() {
  }

  search() {
    const title = this.searchValue.trim();
      this.rout.navigate(['/result'], { queryParams: { title}});
        
      }
    }
  
