import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { tap } from 'rxjs';

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
    const token = localStorage.getItem("authToken");
    this.titleService.setTitle("Todos os filmes | Catvie")
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    this.http.get('http://localhost:8080/api/film/v1/findAll', { headers: headers})
    .subscribe((data: any) => {
      this.movies = data;
    })
  }
}

