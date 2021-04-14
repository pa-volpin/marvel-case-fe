import { types, ICharacter, IAction } from './types';

const initialState: ICharacter  = {
  data: {} as ICharacter['data'],
  error: '',
  loading: false,
};

const fetch = (state: ICharacter) => ({ ...state, loading: true });

const fetchSuccess = (state: ICharacter, payload: ICharacter['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: ICharacter, payload: ICharacter['error']) => ({
  ...state,
  error: payload,
  loading: false
});


const characterReducer = (state = initialState, action: IAction) => {
  const type = action.type;
  const payload = action.payload;

  switch(type) {
    case types.FETCH:
      return fetch(state)
    case types.FETCH_SUCCESS:
      return fetchSuccess(state, payload)
    case types.FETCH_ERROR:
      return fetchError(state, payload)
    default:
      return state
  }
};

export default characterReducer