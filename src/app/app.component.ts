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
  constructor( private rout: Router) {}

  search() {
    const title = this.searchValue.trim();
      this.rout.navigate(['/result'], { queryParams: { title}});
        
      }
    }
  
