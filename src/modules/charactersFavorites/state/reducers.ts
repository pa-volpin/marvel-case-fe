import { types, IFavoritesCharacters, IAction } from './types';

const initialState: IFavoritesCharacters  = {
  data: { count: 0, rows: [] },
  error: '',
  loading: false,
  limit: 12,
  page: 1,
  orderBy: 'name',
  search: '',
};

const fetch = (state: IFavoritesCharacters) => ({ ...state, loading: true });

const fetchSuccess = (state: IFavoritesCharacters, payload: IFavoritesCharacters['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IFavoritesCharacters, payload: IFavoritesCharacters['error']) => ({
  ...state,
  error: payload,
  loading: false
});

const setPage = (state: IFavoritesCharacters, payload: IFavoritesCharacters['page']) => ({
  ...state,
  loading: true,
  page: payload
});

const setLimit = (state: IFavoritesCharacters, payload: IFavoritesCharacters['limit']) => ({
  ...state,
  page: 1,
  loading: true,
  limit: payload
});

const setOrderBy = (state: IFavoritesCharacters, payload: IFavoritesCharacters['orderBy']) => ({
  ...state,
  loading: true,
  orderBy: payload
});

const setSearch = (state: IFavoritesCharacters, payload: IFavoritesCharacters['search']) => ({
  ...state,
  page: 1,
  loading: true,
  search: payload
});

const favoritesCharactersReducer = (state = initialState, action: IAction) => {
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

export default favoritesCharactersReducer;
