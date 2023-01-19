import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-app';

  constructor(private authService: AuthService, private router:Router){}

  login(){
    if (!this.authService.loggedIn){
      this.authService.logIn();
    }else {
      this.authService.logOut()
      // on revient a home
      this.router.navigate(['/home']);
    }
  }
}
