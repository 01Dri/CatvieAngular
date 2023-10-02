import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Catvie';
  searchValue!: string;
  constructor(private http: HttpClient) {}

  search() {
    const searchText = this.searchValue.trim();
    this.http.get(`http://localhost:8080/film/v1/findByTitle/${searchText}`)
    .subscribe(data => {
      console.log(data)
    })
  }
}