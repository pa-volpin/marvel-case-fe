import { types, IFloatBoxPayload, IFloatBox, IAction } from './types';

const initialState: IFloatBox  = {
  open: false,
  closeOption: true,
  message: '',
  timeToClose: 0,
  redirect: '',
  tag: ''
}

const close = () => initialState;

const open = (state: IFloatBox, payload: IFloatBoxPayload) =>
  ({ ...state, open: true, ...payload });

const floatBoxReducer = (state = initialState, action: IAction) => {
  const type = action.type;
  const payload = action.payload;

  switch(type) {
    case types.CLOSE:
      return close();
    case types.OPEN:
      return open(state, payload);
    default:
      return state
  }
};

export default floatBoxReducer;
