import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  title = 'Catvie Films';
  movies: any[] = [];


  constructor(private http: HttpClient, private router: Router, private titleService: Title) {}


  ngOnInit() {
    this.titleService.setTitle("Todos os filmes | Catvie")
    this.http.get('http://localhost:8080/film/v1/findAll')
    .subscribe((data: any) => {
      this.movies = data;
    });
  }
}

