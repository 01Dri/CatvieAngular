import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterDTO } from '../../entities/registerDto/RegisterDTO';
import { UserRole } from '../../entities/enums/RoleEnums';
import { animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

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

  constructor(private http: HttpClient, private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('Cadastra-se | Catvie')
  }

  onSubmit() {
  
    const userRegister = new RegisterDTO(
      this.user.firstname,
      this.user.lastname,
      this.user.email,
      this.user.password,
      this.user.token,
      UserRole.USER
    );

    this.http.post('http://localhost:8080/auth/v1/register', userRegister)
    .subscribe((data: any)=> {
      console.log(data)
    })
  }

}
