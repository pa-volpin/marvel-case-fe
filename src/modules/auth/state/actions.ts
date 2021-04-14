import { types, IAuth, IPayloadPostLogin, IPayloadPostRegister, IPayloadPostForgotPassword, IPayloadPostResetPassword } from './types';

// CLEAR STATE
const clearState = () => ({ type: types.CLEAR_STATE });

// LOGIN
const login = (payload: IPayloadPostLogin) => ({ type: types.LOGIN , payload });

const loginSuccess = (payload: IAuth['data']) => ({ type: types.LOGIN_SUCCESS, payload });

const loginError = (payload: IAuth['error']) => ({ type: types.LOGIN_ERROR, payload });

// CHECK ME
const checkMe = () => ({ type: types.CHECK_ME  });

const checkMeSuccess = (payload: IAuth['data']) => ({ type: types.CHECK_ME_SUCCESS, payload });

const checkMeError = (payload: IAuth['error']) => ({ type: types.CHECK_ME_ERROR, payload });

// REGISTER
const register = (payload: IPayloadPostRegister) =>
  ({ type: types.REGISTER , payload });

const registerSuccess = () => ({ type: types.REGISTER_SUCCESS });

const registerError = (payload: IAuth['error']) =>
  ({ type: types.REGISTER_ERROR, payload });

  // REGISTER CONFIRMATION
const registerConfirmation = () => ({ type: types.REGISTER_CONFIRMATION });

const registerConfirmationSuccess = () =>
  ({ type: types.REGISTER_CONFIRMATION_SUCCESS });

const registerConfirmationError = (payload: IAuth['error']) =>
  ({ type: types.REGISTER_CONFIRMATION_ERROR, payload });

// FORGOT PASSWORD
const forgotPassword = (payload: IPayloadPostForgotPassword) =>
  ({ type: types.FORGOT_PASSWORD , payload });

const forgotPasswordSuccess = () => ({ type: types.FORGOT_PASSWORD_SUCCESS });

const forgotPasswordError = (payload: IAuth['error']) =>
  ({ type: types.FORGOT_PASSWORD_ERROR, payload });

// FORGOT PASSWORD CONFIRMATION
const forgotPasswordConfirmation = () =>
  ({ type: types.FORGOT_PASSWORD_CONFIRMATION });

const forgotPasswordConfirmationSuccess = (payload: IAuth['data']['email']) =>
  ({ type: types.FORGOT_PASSWORD_CONFIRMATION_SUCCESS, payload });

const forgotPasswordConfirmationError = (payload: IAuth['error']) =>
  ({ type: types.FORGOT_PASSWORD_CONFIRMATION_ERROR, payload });

// RESET PASSWORD
const resetPassword = (payload: IPayloadPostResetPassword) =>
  ({ type: types.RESET_PASSWORD , payload });

const resetPasswordSuccess = () =>
  ({ type: types.RESET_PASSWORD_SUCCESS });

const resetPasswordError = (payload: IAuth['error']) =>
  ({ type: types.RESET_PASSWORD_ERROR, payload });

export {
  login,
  loginError,
  loginSuccess,
  checkMe,
  checkMeError,
  checkMeSuccess,
  register,
  registerError,
  registerSuccess,
  registerConfirmation,
  registerConfirmationError,
  registerConfirmationSuccess,
  forgotPassword,
  forgotPasswordError,
  forgotPasswordSuccess,
  forgotPasswordConfirmation,
  forgotPasswordConfirmationError,
  forgotPasswordConfirmationSuccess,
  resetPassword,
  resetPasswordError,
  resetPasswordSuccess,
  clearState
}