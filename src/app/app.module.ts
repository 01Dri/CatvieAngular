import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilmsComponent } from './components/films/films.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { TokenInterceptorService } from './services/auth/token-services/token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmSearchComponent,
    RegisterScreenComponent,
    LoginscreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
