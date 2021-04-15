import { types, IAuth, IAction } from './types';

const initialState: IAuth  = {
  data: {} as IAuth['data'],
  error: '',
  loading: false,
};

// CLEAR STATE
const clearState = () => initialState;

// LOGIN
const login = (state: IAuth) => ({ ...state, loading: true });

const loginSuccess = (state: IAuth, payload: IAuth['data']) =>
  ({ ...state, data: payload, loading: false });

const loginError = (state: IAuth, payload: IAuth['error']) =>
  ({ ...state, error: payload, loading: false });

// CHECK ME
const checkMe = (state: IAuth) => ({ ...state, loading: true });

const checkMeSuccess = (state: IAuth, payload: IAuth['data']) =>
  ({ ...state, data: payload, loading: false });

const checkMeError = (state: IAuth, payload: IAuth['error']) =>
  ({ ...state, error: payload, loading: false });

// REGISTER
const register = (state: IAuth) => ({ ...state, loading: true });

const registerSuccess = (state: IAuth) => ({ ...state, loading: false });
  
const registerError = (state: IAuth, payload: IAuth['error']) =>
    ({ ...state, error: payload, loading: false });

// REGISTER CONFIRMATION
const registerConfirmation = (state: IAuth) => ({ ...state, loading: true });

const registerConfirmationSuccess = (state: IAuth) =>
  ({ ...state,  loading: false });

const registerConfirmationError = (state: IAuth, payload: IAuth['error']) =>
  ({ ...state, error: payload, loading: false });

// FORGOT PASSWORD
const forgotPassword = (state: IAuth) => ({ ...state, loading: true });

const forgotPasswordSuccess = (state: IAuth) => ({ ...state, loading: false });
  
const forgotPasswordError = (state: IAuth, payload: IAuth['error']) =>
    ({ ...state, error: payload, loading: false });

// FORGOT PASSWORD CONFIRMATION
const forgotPasswordConfirmation = (state: IAuth) => ({ ...state, loading: true });

const forgotPasswordConfirmationSuccess = (state: IAuth, payload: IAuth['data']['email']) =>
  ({ ...state, data: { ...state.data, email: payload },  loading: false });

const forgotPasswordConfirmationError = (state: IAuth, payload: IAuth['error']) => ({ ...state, error: payload, loading: false });

// RESET PASSWORD
const resetPassword = (state: IAuth) => ({ ...state, loading: true });

const resetPasswordSuccess = (state: IAuth) => ({ ...state, loading: false });

const resetPasswordError = (state: IAuth, payload: IAuth['error']) =>
  ({ ...state, error: payload, loading: false });

// UNSUBSCRIBE
// LOGIN
const unsubscribe = (state: IAuth) => ({ ...state, loading: true });

const unsubscribeSuccess = (state: IAuth) =>
  ({ ...state, loading: false });

const unsubscribeError = (state: IAuth, payload: IAuth['error']) =>
  ({ ...state, error: payload, loading: false });

const authReducer = (state = initialState, action: IAction) => {
  const type = action.type;
  const payload = action.payload;

  switch(type) {
    case types.CLEAR_STATE:
      return clearState();
    case types.LOGIN:
      return login(state);
    case types.LOGIN_SUCCESS:
      return loginSuccess(state, payload);
    case types.LOGIN_ERROR:
      return loginError(state, payload);
    case types.CHECK_ME:
      return checkMe(state);
    case types.CHECK_ME_SUCCESS:
      return checkMeSuccess(state, payload);
    case types.CHECK_ME_ERROR:
      return checkMeError(state, payload);
    case types.REGISTER:
      return register(state);
    case types.REGISTER_SUCCESS:
      return registerSuccess(state);
    case types.REGISTER_ERROR:
      return registerError(state, payload);
    case types.REGISTER_CONFIRMATION:
      return registerConfirmation(state);
    case types.REGISTER_CONFIRMATION_SUCCESS:
      return registerConfirmationSuccess(state);
    case types.REGISTER_CONFIRMATION_ERROR:
      return registerConfirmationError(state, payload);
    case types.FORGOT_PASSWORD:
      return forgotPassword(state);
    case types.FORGOT_PASSWORD_SUCCESS:
      return forgotPasswordSuccess(state);
    case types.FORGOT_PASSWORD_ERROR:
      return forgotPasswordError(state, payload);
    case types.FORGOT_PASSWORD_CONFIRMATION:
      return forgotPasswordConfirmation(state);
    case types.FORGOT_PASSWORD_CONFIRMATION_SUCCESS:
      return forgotPasswordConfirmationSuccess(state, payload);
    case types.FORGOT_PASSWORD_CONFIRMATION_ERROR:
      return forgotPasswordConfirmationError(state, payload);
    case types.RESET_PASSWORD:
      return resetPassword(state);
    case types.RESET_PASSWORD_SUCCESS:
      return resetPasswordSuccess(state);
    case types.RESET_PASSWORD_ERROR:
      return resetPasswordError(state, payload);
    case types.UNSUBSCRIBE:
      return unsubscribe(state);
    case types.UNSUBSCRIBE_SUCCESS:
      return unsubscribeSuccess(state);
    case types.UNSUBSCRIBE_ERROR:
      return unsubscribeError(state, payload);
    default:
      return state
  }
};

export default authReducer;
