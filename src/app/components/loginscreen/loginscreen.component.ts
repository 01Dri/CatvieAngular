import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginDTO } from 'src/app/entities/loginDTO/LoginDTO';
import { TokenResponseDTO } from 'src/app/entities/token-dto/TokenResponseDTO';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent {

  token: string = '';

  user = {
    email: '', 
    password: ''
  };



  constructor(private http: HttpClient, private router: Router, private authService: AuthServiceService) {}

  login() {
    const userLogin = new LoginDTO(
      this.user.email,
      this.user.password
    );
    this.http.post<TokenResponseDTO>('api/auth/v1/login', userLogin)
    .subscribe((data) => {
      this.token = (data.token);
      if (this.token != null) {
        this.authService.setTokenInCookies(this.token);
        this.router.navigate(["/"])
      }
    })
  }

}
