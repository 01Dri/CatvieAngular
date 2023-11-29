import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {

  private readonly API = "api/film/v1/"
  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<any[]>(this.API + 'findAll')
    .pipe(
      first(),
      delay(5000),
      tap(films => console.log(films))
    );
  }
}
