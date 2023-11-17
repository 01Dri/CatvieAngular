import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginDTO } from 'src/app/entities/loginDTO/LoginDTO';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent {

  token = '';

  user = {
    email: '', 
    password: ''
  };



  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const userLogin = new LoginDTO(
      this.user.email,
      this.user.password
    );
    this.http.post('http://localhost:8080/api/auth/v1/login', userLogin)
    .subscribe((data: any) => {
      this.token = data.token
      if (this.token != null) {
        localStorage.setItem('authToken', this.token);
        this.router.navigate(["/"])
      }
    })
  }

}
