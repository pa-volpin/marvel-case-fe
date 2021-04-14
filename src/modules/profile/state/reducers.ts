import { types, IProfile, IAction } from './types';

const initialState: IProfile  = {
  data: { name: '', email: '' },
  error: '',
  loading: false,
};

const getMe = (state: IProfile) => ({ ...state, loading: true });

const getMeSuccess = (state: IProfile, payload: IProfile['data']) =>
  ({ ...state, data: payload, loading: false });

const getMeError = (state: IProfile, payload: IProfile['error']) =>
  ({ ...state, error: payload, loading: false });

const changeName = (state: IProfile) => ({ ...state, loading: true });

const changeNameSuccess = (state: IProfile, payload: IProfile['data']) =>
  ({ ...state, data: payload, loading: false });

const changeNameError = (state: IProfile, payload: IProfile['error']) =>
  ({ ...state, error: payload, loading: false });

const changePassword = (state: IProfile) => ({ ...state, loading: true });

const changePasswordSuccess = (state: IProfile, payload: IProfile['data']) =>
  ({ ...state, data: payload, loading: false });

const changePasswordError = (state: IProfile, payload: IProfile['error']) =>
  ({ ...state, error: payload, loading: false });

const profileReducer = (state = initialState, action: IAction) => {
  const type = action.type;
  const payload = action.payload;

  switch(type) {
    case types.GET_ME:
      return getMe(state);
    case types.GET_ME_SUCCESS:
      return getMeSuccess(state, payload);
    case types.GET_ME_ERROR:
      return getMeError(state, payload);
    case types.CHANGE_NAME:
      return changeName(state);
    case types.CHANGE_NAME_SUCCESS:
      return changeNameSuccess(state, payload);
    case types.CHANGE_NAME_ERROR:
      return changeNameError(state, payload);
    case types.CHANGE_PASSWORD:
      return changePassword(state);
    case types.CHANGE_PASSWORD_SUCCESS:
      return changePasswordSuccess(state, payload);
    case types.CHANGE_PASSWORD_ERROR:
      return changePasswordError(state, payload);
    default:
      return state
  }
};

export default profileReducer;
