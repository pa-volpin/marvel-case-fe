import { types, IComic, IAction } from './types';

const initialState: IComic  = {
  data: {} as IComic['data'],
  error: '',
  loading: false,
};

const fetch = (state: IComic) => ({ ...state, loading: true });

const fetchSuccess = (state: IComic, payload: IComic['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IComic, payload: IComic['error']) => ({
  ...state,
  error: payload,
  loading: false
});


const comicReducer = (state = initialState, action: IAction) => {
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

export default comicReducer;