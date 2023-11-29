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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { SharedModule } from './shared/shared.module';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmSearchComponent,
    RegisterScreenComponent,
    LoginscreenComponent,
    ProfileScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SharedModule,
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
