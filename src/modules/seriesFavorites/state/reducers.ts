import { types, IFavoritesSeries, IAction } from './types';

const initialState: IFavoritesSeries  = {
  data: { count: 0, rows: [] },
  error: '',
  loading: false,
  limit: 12,
  page: 1,
  orderBy: 'name',
  search: '',
};

const fetch = (state: IFavoritesSeries) => ({ ...state, loading: true });

const fetchSuccess = (state: IFavoritesSeries, payload: IFavoritesSeries['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IFavoritesSeries, payload: IFavoritesSeries['error']) => ({
  ...state,
  error: payload,
  loading: false
});

const setPage = (state: IFavoritesSeries, payload: IFavoritesSeries['page']) => ({
  ...state,
  loading: true,
  page: payload
});

const setLimit = (state: IFavoritesSeries, payload: IFavoritesSeries['limit']) => ({
  ...state,
  page: 1,
  loading: true,
  limit: payload
});

const setOrderBy = (state: IFavoritesSeries, payload: IFavoritesSeries['orderBy']) => ({
  ...state,
  loading: true,
  orderBy: payload
});

const setSearch = (state: IFavoritesSeries, payload: IFavoritesSeries['search']) => ({
  ...state,
  page: 1,
  loading: true,
  search: payload
});

const favoritesSeriesReducer = (state = initialState, action: IAction) => {
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

export default favoritesSeriesReducer;
