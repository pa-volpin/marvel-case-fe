import { types, IFavoritesEvents, IAction } from './types';

const initialState: IFavoritesEvents  = {
  data: { count: 0, rows: [] },
  error: '',
  loading: false,
  limit: 12,
  page: 1,
  orderBy: 'name',
  search: '',
};

const fetch = (state: IFavoritesEvents) => ({ ...state, loading: true });

const fetchSuccess = (state: IFavoritesEvents, payload: IFavoritesEvents['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IFavoritesEvents, payload: IFavoritesEvents['error']) => ({
  ...state,
  error: payload,
  loading: false
});

const setPage = (state: IFavoritesEvents, payload: IFavoritesEvents['page']) => ({
  ...state,
  loading: true,
  page: payload
});

const setLimit = (state: IFavoritesEvents, payload: IFavoritesEvents['limit']) => ({
  ...state,
  page: 1,
  loading: true,
  limit: payload
});

const setOrderBy = (state: IFavoritesEvents, payload: IFavoritesEvents['orderBy']) => ({
  ...state,
  loading: true,
  orderBy: payload
});

const setSearch = (state: IFavoritesEvents, payload: IFavoritesEvents['search']) => ({
  ...state,
  page: 1,
  loading: true,
  search: payload
});

const favoritesEventsReducer = (state = initialState, action: IAction) => {
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

export default favoritesEventsReducer;
