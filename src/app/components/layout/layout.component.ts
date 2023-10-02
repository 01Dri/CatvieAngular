import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  title = 'Catvie Films';
  movies: any[] = [];


  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    this.http.get('http://localhost:8080/film/v1/findAll').subscribe((data: any) => {
      this.movies = data;
    });
  }
}
