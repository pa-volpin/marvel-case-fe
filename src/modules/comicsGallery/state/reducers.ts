import { types, IComics, IAction } from './types';

const initialState: IComics  = {
  data: { count: 0, rows: [] },
  error: '',
  loading: false,
  limit: 12,
  page: 1,
  orderBy: 'title',
  search: '',
  searchType: 'title',
  favorites: {
    data: [],
    error: '',
    loading: false
  }
};

const fetch = (state: IComics) => ({ ...state, loading: true });

const fetchSuccess = (state: IComics, payload: IComics['data']) => ({
  ...state,
  data: payload,
  loading: false
});

const fetchError = (state: IComics, payload: IComics['error']) => ({
  ...state,
  error: payload,
  loading: false
});

const setPage = (state: IComics, payload: IComics['page']) => ({
  ...state,
  loading: true,
  page: payload
});

const setLimit = (state: IComics, payload: IComics['limit']) => ({
  ...state,
  page: 1,
  loading: true,
  limit: payload
});

const setOrderBy = (state: IComics, payload: IComics['orderBy']) => ({
  ...state,
  loading: true,
  orderBy: payload
});

const setSearch = (state: IComics, payload: IComics['search']) => ({
  ...state,
  page: 1,
  loading: true,
  search: payload
});

const setSearchType = (state: IComics, payload: IComics['searchType']) => ({
  ...state,
  page: 1,
  loading: true,
  searchType: payload
});

const fetchFavorites = (state: IComics) => ({
  ...state,
  favorites: {
    ...state.favorites,
    loading: true
  }
});

const fetchFavoritesSuccess = (state: IComics, payload: IComics['favorites']['data']) => ({
  ...state,
  favorites: {
    ...state.favorites,
    data: payload,
    loading: false
  }
});

const fetchFavoritesError = (state: IComics, payload: IComics['favorites']['error']) => ({
  ...state,
  favorites: {
    ...state.favorites,
    error: payload,
    loading: false
  }
});


const comicsReducer = (state = initialState, action: IAction) => {
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

export default comicsReducer