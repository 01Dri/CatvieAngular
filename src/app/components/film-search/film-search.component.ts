import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { FILM_ENDPOINTS } from 'src/app/services/film-services/constants/ENDPOINTS';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  nameMovie: string = '';
  film: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private titleService: Title, private authService: AuthServiceService) {}
  
  ngOnInit() {
    console.log(this.authService.getAuthToken())
    this.route.queryParamMap.subscribe(params => {
      this.nameMovie = params.get('title')!;
      this.http.get<any>(FILM_ENDPOINTS.FIND_BY_TITLE + this.nameMovie).subscribe((response) => {
        console.log(response)
        this.film = response;
      })
    }
    )
  }
}