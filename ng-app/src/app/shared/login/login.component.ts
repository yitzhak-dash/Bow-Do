import { Component } from '@angular/core';
import { Router } from '@angular/router';
//
import { LoginActions } from './actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginActions: LoginActions,
              private router: Router) {}

  cancel() {
    this.loginActions.clearLogin();
  }

  loginCompleted() {
    this.router.navigate(['/shopping-list']);
    this.loginActions.clearLogin();
  }
}
