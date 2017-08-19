import { BaseUser } from '../../common/user';

export enum ModalStatus {
  none = 0,
  login = 1,
  signUp = 2
}

export interface ILogin {
  modalStatus: ModalStatus;
  requestingUser: BaseUser;
}

export const LOGIN_INIT_STATE: ILogin = {
  modalStatus: ModalStatus.none,
  requestingUser: null
};



