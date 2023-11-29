import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterDTO } from '../../entities/registerDto/RegisterDTO';
import { UserRole } from '../../entities/enums/RoleEnums';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent {

  user = {
    firstname:  '',
    lastname: '',
    email: '', 
    password: '', 
    token: '', 
    role: ''
  };

  constructor(private http: HttpClient, private titleService: Title, private router: Router) {}
  ngOnInit() {
    this.titleService.setTitle('Cadastra-se | Catvie')
  }

  onSubmit() {
  
    const userRegister = new RegisterDTO(
      this.user.firstname.toLowerCase(),
      this.user.lastname.toLowerCase(),
      this.user.email.toLowerCase(),
      this.user.password.toLowerCase(),
      this.user.token,
      UserRole.ADMIN
    );

    this.http.post('api/auth/v1/register', userRegister)
    .subscribe((data: any)=> {
      console.log(data)
      if (data.email === this.user.email) {
        this.router.navigate(["/login"])
      }
    })
  }

  loginWithGitHub() {

    window.location.href = 'http://localhost:8080/oauth2/authorization/github'

  }

  
}

