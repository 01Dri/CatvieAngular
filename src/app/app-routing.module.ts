import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';

const routes: Routes = [
  { path: 'films' , component: FilmsComponent },
  { path: 'result' , component: FilmSearchComponent },
  { path: 'register' , component: RegisterScreenComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
