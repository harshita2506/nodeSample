import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(private service: LoginServiceService, private route: Router) { }

  ngOnInit() {
  }

  submitLogin(username: string, pwd: string) {
    const usernamee = this.service.newService(username, pwd);
    if (usernamee == true) {
      this.route.navigate(['/dashboard']);
    } else {
      this.message = 'Invalid username and password';
    }
  }
}
