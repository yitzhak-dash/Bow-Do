import { Action, Reducer } from 'redux';
//
import {ILogin, LOGIN_INIT_STATE} from './model';
import { LoginAction, LoginActions } from './actions';

export const loginReducer: Reducer<ILogin> =
  (state: ILogin = LOGIN_INIT_STATE, a: Action): ILogin => {
    const action = a as LoginAction;
    switch (action.type) {
      case LoginActions.CANCEL_LOGIN:
      case LoginActions.LOGIN_REQUIRED:
      case LoginActions.SIGN_UP_REQUIRED:
        return {...action.payload};
      default:
        return state;
    }
  };
