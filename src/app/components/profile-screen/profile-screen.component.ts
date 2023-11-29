import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent {

  constructor(private authServices: AuthServiceService, private router: Router){}

  ngOnInit() {
    const token = this.authServices.getAuthToken();
    if (this.authServices.verifyTokenIsNull(token)) {
      this.router.navigate(['/login']);
    }
    
  }

}
