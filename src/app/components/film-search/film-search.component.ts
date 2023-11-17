import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  nameMovie: string = '';
  film: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private titleService: Title) {}
  ngOnInit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("authToken")
    });
    this.route.queryParamMap.subscribe(params => {
      this.nameMovie = params.get('title')!;
      this.http.get(`http://localhost:8080/api/film/v1/findByTitle/${this.nameMovie}`, {headers})
      .subscribe((data: any) => {
         this.film = data
         this.titleService.setTitle(data.title + ' - Catvie');
      })
      
    })
  }

}