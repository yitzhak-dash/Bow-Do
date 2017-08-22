import { Component } from '@angular/core';
import { LoginActions } from '../shared/login/actions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private loginActions: LoginActions) { }

  logIn() {
    this.loginActions.loginRequired();
  }

  signUp() {
    this.loginActions.signUpRequired();
  }
}
