import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';

const routes: Routes = [
  { path: 'films' , component: FilmsComponent },
  { path: 'result' , component: FilmSearchComponent },
  { path: 'register' , component: RegisterScreenComponent },
  { path: 'login', component: LoginscreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
