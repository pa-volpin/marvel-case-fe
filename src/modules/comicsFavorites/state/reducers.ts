import { types, IFavoritesComics, IAction } from './types';

const initialState: IFavoritesComics  = {
  data: { count: 0, rows: [] },
  error: '',
  loading: false,
  limit: 12,
  page: 1,
  orderBy: 'name',
  search: '',
};

const fetch = (state: IFavoritesComics) => ({ ...state, loading: true });

const fetchSuccess = (state: IFavoritesComics, payload: IFavoritesComics['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IFavoritesComics, payload: IFavoritesComics['error']) => ({
  ...state,
  error: payload,
  data: initialState.data,
  loading: false
});

const setPage = (state: IFavoritesComics, payload: IFavoritesComics['page']) => ({
  ...state,
  loading: true,
  page: payload
});

const setLimit = (state: IFavoritesComics, payload: IFavoritesComics['limit']) => ({
  ...state,
  page: 1,
  loading: true,
  limit: payload
});

const setOrderBy = (state: IFavoritesComics, payload: IFavoritesComics['orderBy']) => ({
  ...state,
  loading: true,
  orderBy: payload
});

const setSearch = (state: IFavoritesComics, payload: IFavoritesComics['search']) => ({
  ...state,
  page: 1,
  loading: true,
  search: payload
});

const favoritesComicsReducer = (state = initialState, action: IAction) => {
  const type = action.type;
  const payload = action.payload;

  switch(type) {
    case types.FETCH:
      return fetch(state)
    case types.FETCH_SUCCESS:
      return fetchSuccess(state, payload)
    case types.FETCH_ERROR:
      return fetchError(state, payload)
    case types.SET_PAGE:
      return setPage(state, payload)
    case types.SET_LIMIT:
      return setLimit(state, payload)
    case types.SET_ORDER_BY:
      return setOrderBy(state, payload)
    case types.SET_SEARCH:
      return setSearch(state, payload)
    default:
      return state
  }
};

export default favoritesComicsReducer;
