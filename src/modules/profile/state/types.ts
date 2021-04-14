export const types = {
  GET_ME: '@@profile/GET_ME',
  GET_ME_ERROR: '@@profile/GET_ME_ERROR',
  GET_ME_SUCCESS: '@@profile/GET_ME_SUCCESS',
  CHANGE_NAME: '@@profile/CHANGE_NAME',
  CHANGE_NAME_ERROR: '@@profile/CHANGE_NAME_ERROR',
  CHANGE_NAME_SUCCESS: '@@profile/CHANGE_NAME_SUCCESS',
  CHANGE_PASSWORD: '@@profile/CHANGE_PASSWORD',
  CHANGE_PASSWORD_ERROR: '@@profile/CHANGE_PASSWORD_ERROR',
  CHANGE_PASSWORD_SUCCESS: '@@profile/CHANGE_PASSWORD_SUCCESS',
}

export interface IProfile {
  data: { name: string, email: string }
  loading: boolean
  error: string
}

export interface IProfilePayloadPostChangeName {
  email: string
  name: string
}

export interface IProfilePayloadPostChangePassword {
  email: string
  oldPassword: string
  newPassword: string
}


export interface IAction {
  type: string
  payload: IProfile['error']
    & IProfile['data']
    & IProfilePayloadPostChangeName
    & IProfilePayloadPostChangePassword
}
