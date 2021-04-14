import {
  types,
  IProfile,
  IProfilePayloadPostChangeName,
  IProfilePayloadPostChangePassword
} from './types';

const getMe = () => ({ type: types.GET_ME  });

const getMeSuccess = (payload: IProfile['data']) =>
  ({ type: types.GET_ME_SUCCESS, payload });

const getMeError = (payload: IProfile['error']) =>
  ({ type: types.GET_ME_ERROR, payload });

const changeName = (payload: IProfilePayloadPostChangeName) =>
  ({ type: types.CHANGE_NAME , payload });

const changeNameSuccess = (payload: IProfile['data']) =>
  ({ type: types.CHANGE_NAME_SUCCESS, payload });

const changeNameError = (payload: IProfile['error']) =>
  ({ type: types.CHANGE_NAME_ERROR, payload });

const changePassword = (payload: IProfilePayloadPostChangePassword) =>
  ({ type: types.CHANGE_PASSWORD , payload });

const changePasswordSuccess = (payload: IProfile['data']) =>
  ({ type: types.CHANGE_PASSWORD_SUCCESS, payload });

const changePasswordError = (payload: IProfile['error']) =>
  ({ type: types.CHANGE_PASSWORD_ERROR, payload });

export {
  getMe,
  getMeSuccess,
  getMeError,
  changeName,
  changeNameError,
  changeNameSuccess,
  changePassword,
  changePasswordError,
  changePasswordSuccess,
}