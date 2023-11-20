import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { FILM_ENDPOINTS } from 'src/app/services/film-services/constants/ENDPOINTS';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  title = 'Catvie Films';
  movies: any[] = [];
  constructor(private titleService: Title, private tokenService: AuthServiceService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(FILM_ENDPOINTS.FIND_ALL).subscribe((response) => {
      console.log(response)
      this.movies = response;
    })
    }
  }

