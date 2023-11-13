import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilmsComponent } from './films/films.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmSearchComponent,
    RegisterScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
