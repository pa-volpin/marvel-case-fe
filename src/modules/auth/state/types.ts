export const types = {
  CLEAR_STATE: '@@clearState/CLEAR_STATE',
  LOGIN: '@@login/LOGIN',
  LOGIN_ERROR: '@@login/LOGIN_ERROR',
  LOGIN_SUCCESS: '@@login/LOGIN_SUCCESS',
  CHECK_ME: '@@checkMe/CHECK_ME',
  CHECK_ME_ERROR: '@@checkMe/CHECK_ME_ERROR',
  CHECK_ME_SUCCESS: '@@checkMe/CHECK_ME_SUCCESS',
  REGISTER: '@@register/REGISTER',
  REGISTER_ERROR: '@@register/REGISTER_ERROR',
  REGISTER_SUCCESS: '@@register/REGISTER_SUCCESS',
  REGISTER_CONFIRMATION: '@@register-confimation/REGISTER_CONFIRMATION',
  REGISTER_CONFIRMATION_ERROR: '@@register-confimation/REGISTER_CONFIRMATION_ERROR',
  REGISTER_CONFIRMATION_SUCCESS: '@@register-confimation/REGISTER_CONFIRMATION_SUCCESS',
  FORGOT_PASSWORD: '@@forgotPassword/FORGOT_PASSWORD',
  FORGOT_PASSWORD_ERROR: '@@forgotPassword/FORGOT_PASSWORD_ERROR',
  FORGOT_PASSWORD_SUCCESS: '@@forgotPassword/FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_CONFIRMATION: '@@forgotPasswordConfirmation/FORGOT_PASSWORD_CONFIRMATION',
  FORGOT_PASSWORD_CONFIRMATION_ERROR: '@@forgotPasswordConfirmation/FORGOT_PASSWORD_CONFIRMATION_ERROR',
  FORGOT_PASSWORD_CONFIRMATION_SUCCESS: '@@forgotPasswordConfirmation/FORGOT_PASSWORD_CONFIRMATION_SUCCESS',
  RESET_PASSWORD: '@@resetPassword/RESET_PASSWORD',
  RESET_PASSWORD_ERROR: '@@resetPassword/RESET_PASSWORD_ERROR',
  RESET_PASSWORD_SUCCESS: '@@resetPassword/RESET_PASSWORD_SUCCESS',
  UNSUBSCRIBE: '@@unsubscribe/UNSUBSCRIBE',
  UNSUBSCRIBE_ERROR: '@@unsubscribe/UNSUBSCRIBE_ERROR',
  UNSUBSCRIBE_SUCCESS: '@@unsubscribe/UNSUBSCRIBE_SUCCESS',
}

export interface IAuth {
  data: { name: string, email: string, token: string }
  loading: boolean
  error: string
}

export interface IPayloadPostLogin {
  email: string
  password: string
}

export interface IPayloadPostRegister {
  email: string
  password: string
}

export interface IPayloadPostForgotPassword {
  email: string
}

export interface IPayloadPostResetPassword {
  email: string
  password: string
}

export interface IPayloadPostUnsubscribe {
  email: string
  password: string
}

export interface IAction {
  type: string
  payload: IAuth['error']
    & IAuth['data']
    & IPayloadPostLogin
    & IPayloadPostRegister
    & IPayloadPostForgotPassword
    & IPayloadPostResetPassword
    & IPayloadPostUnsubscribe
}
