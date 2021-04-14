import { types, IEvent, IAction } from './types';

const initialState: IEvent  = {
  data: {} as IEvent['data'],
  error: '',
  loading: false,
};

const fetch = (state: IEvent) => ({ ...state, loading: true });

const fetchSuccess = (state: IEvent, payload: IEvent['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IEvent, payload: IEvent['error']) => ({
  ...state,
  error: payload,
  loading: false
});


const eventReducer = (state = initialState, action: IAction) => {
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

export default eventReducer