import { types, ICharacters, IAction } from './types';

const initialState: ICharacters  = {
  data: { count: 0, rows: [] },
  error: '',
  loading: false
};

const fetch = (state: ICharacters) => ({ ...state, loading: true });

const fetchSuccess = (state: ICharacters, payload: ICharacters['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: ICharacters, payload: ICharacters['error']) => ({
  ...state,
  error: payload,
  loading: false
});


const charactersReducer = (state = initialState, action: IAction) => {
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

export default charactersReducer