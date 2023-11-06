import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Catvie';
  searchValue!: string;
  constructor(private http: HttpClient, private active: ActivatedRoute, private rout: Router) {}

  search() {
    const searchText = this.searchValue.trim();
    this.http.get(`http://localhost:8080/film/v1/findByTitle/${searchText}`)
    .subscribe(data => {
        this.rout.navigate(['/result'], {queryParams: {data: JSON.stringify(data)}})
      })
    }
  }
