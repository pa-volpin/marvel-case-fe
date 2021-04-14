export const types = {
  OPEN: '@@floatBox/OPEN_FLOAT_BOX',
  CLOSE: '@@floatBox/CLOSE_FLOAT_BOX',
}

export interface IFloatBox {
  open: boolean
  closeOption: boolean
  message: string
  timeToClose: number
  redirect: string
  tag: string
}

export interface IFloatBoxPayload {
  closeOption?: boolean
  message?: string
  timeToClose?: number
  redirect?: string
  tag?: string
}

export interface IAction {
  type: string
  payload: IFloatBoxPayload
}
