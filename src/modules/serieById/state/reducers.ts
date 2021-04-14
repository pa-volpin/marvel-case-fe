import { types, ISerie, IAction } from './types';

const initialState: ISerie  = {
  data: {} as ISerie['data'],
  error: '',
  loading: false,
};

const fetch = (state: ISerie) => ({ ...state, loading: true });

const fetchSuccess = (state: ISerie, payload: ISerie['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: ISerie, payload: ISerie['error']) => ({
  ...state,
  error: payload,
  loading: false
});


const serieReducer = (state = initialState, action: IAction) => {
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

export default serieReducer;