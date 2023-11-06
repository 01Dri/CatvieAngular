import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmSearchComponent } from './film-search/film-search.component';

const routes: Routes = [
  { path: 'films' , component: FilmsComponent },
  { path: 'result' , component: FilmSearchComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
