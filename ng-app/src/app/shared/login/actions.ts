import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
//
import { FluxStandardAction } from 'flux-standard-action';
import { ILogin, ModalStatus } from './model';

type Payload = ILogin;
export type LoginAction = FluxStandardAction<Payload, string>;

@Injectable()
export class LoginActions {

  static readonly LOGIN_REQUIRED = 'LOGIN_REQUIRED';
  static readonly SIGN_UP_REQUIRED = 'SIGN_UP_REQUIRED';
  static readonly CANCEL_LOGIN = 'CANCEL_LOGIN';

  @dispatch()
  loginRequired = (): LoginAction => ({
    type: LoginActions.LOGIN_REQUIRED,
    payload: {modalStatus: ModalStatus.login, requestingUser: null},
    meta: null
  });

  @dispatch()
  signUpRequired = (): LoginAction => ({
    type: LoginActions.SIGN_UP_REQUIRED,
    payload: {modalStatus: ModalStatus.signUp, requestingUser: null},
    meta: null
  });

  @dispatch()
  clearLogin = (): LoginAction => ({
    type: LoginActions.SIGN_UP_REQUIRED,
    payload: {modalStatus: ModalStatus.none, requestingUser: null},
    meta: null
  });

}
