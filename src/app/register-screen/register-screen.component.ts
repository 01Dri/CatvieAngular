import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterDTO } from '../registerDto/RegisterDTO';
import { UserRole } from '../enums/RoleEnums';
import { animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent {

  user = {
    firstname: '',
    lastname: '',
    email: '', 
    password: '', 
    token: '', 
    role: ''
  };

  constructor(private http: HttpClient) {}
  onSubmit() {
  
    const userRegister = new RegisterDTO(
      this.user.firstname,
      this.user.lastname,
      this.user.email,
      this.user.password,
      this.user.token,
      UserRole.USER
    );
    const observable: Observable<any> = this.http.post('http://localhost:8080/auth/v1/register', userRegister);
    observable.subscribe({
      next: ({status, data}) => {
        console.log('Status: ', status);
        console.log('Corpo: ', data)
      },
      error: (error) => {
        console.log('Error: ', error);
      }, 
      complete: () => {
      }
    });
  }

}
