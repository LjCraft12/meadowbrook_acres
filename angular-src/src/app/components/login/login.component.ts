import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor() { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {                                                                                                      // User object to be submitted to the backend auth service
      username: this.username,
      password: this.password
    }
  }
}
