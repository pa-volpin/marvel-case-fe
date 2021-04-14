import { types, IEvents, IAction } from './types';

const initialState: IEvents  = {
  data: { count: 0, rows: [] },
  error: '',
  loading: false,
  limit: 12,
  page: 1,
  orderBy: 'name',
  search: '',
  searchType: 'name',
  favorites: {
    data: [],
    error: '',
    loading: false
  }
};

const fetch = (state: IEvents) => ({ ...state, loading: true });

const fetchSuccess = (state: IEvents, payload: IEvents['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IEvents, payload: IEvents['error']) => ({
  ...state,
  error: payload,
  loading: false
});

const setPage = (state: IEvents, payload: IEvents['page']) => ({
  ...state,
  loading: true,
  page: payload
});

const setLimit = (state: IEvents, payload: IEvents['limit']) => ({
  ...state,
  page: 1,
  loading: true,
  limit: payload
});

const setOrderBy = (state: IEvents, payload: IEvents['orderBy']) => ({
  ...state,
  loading: true,
  orderBy: payload
});

const setSearch = (state: IEvents, payload: IEvents['search']) => ({
  ...state,
  page: 1,
  loading: true,
  search: payload
});

const setSearchType = (state: IEvents, payload: IEvents['searchType']) => ({
  ...state,
  page: 1,
  loading: true,
  searchType: payload
});

const fetchFavorites = (state: IEvents) => ({
  ...state,
  favorites: {
    ...state.favorites,
    loading: true
  }
});

const fetchFavoritesSuccess = (state: IEvents, payload: IEvents['favorites']['data']) => ({
  ...state,
  favorites: {
    ...state.favorites,
    data: payload,
    loading: false
  }
});

const fetchFavoritesError = (state: IEvents, payload: IEvents['favorites']['error']) => ({
  ...state,
  favorites: {
    ...state.favorites,
    error: payload,
    loading: false
  }
});


const eventsReducer = (state = initialState, action: IAction) => {
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
    case types.SET_SEARCH_TYPE:
      return setSearchType(state, payload)
    case types.FETCH_FAVORITES:
      return fetchFavorites(state)
    case types.FETCH_FAVORITES_SUCCESS:
      return fetchFavoritesSuccess(state, payload)
    case types.FETCH_FAVORITES_ERROR:
      return fetchFavoritesError(state, payload)
    default:
      return state
  }
};

export default eventsReducer