import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  nameMovie: any;
  film: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.nameMovie = params.get('title');
      this.http.get(`http://localhost:8080/film/v1/findByTitle/${this.nameMovie}`)
      .subscribe((data: any) => {
         this.film = data
      })
      
    })
  }

}