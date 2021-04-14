import { types, IFavoritesComics, IFavorite } from './types';

const fetch = () => ({ type: types.FETCH });

const fetchSuccess = (payload: IFavoritesComics['data']) => ({ type: types.FETCH_SUCCESS, payload });

const fetchError = (payload: IFavoritesComics['error']) => ({ type: types.FETCH_ERROR, payload });

const setPage = (payload: IFavoritesComics['page']) => ({ type: types.SET_PAGE, payload });

const setLimit = (payload: IFavoritesComics['limit']) => ({ type: types.SET_LIMIT, payload });

const setOrderBy = (payload: IFavoritesComics['orderBy']) => ({ type: types.SET_ORDER_BY, payload });

const setSearch = (payload: IFavoritesComics['search']) => ({ type: types.SET_SEARCH, payload });

const dislike =  (payload: IFavorite['marvelId']) => ({ type: types.DISLIKE, payload });

const dislikeSuccess = () => ({ type: types.DISLIKE_SUCCESS });

const dislikeError = () => ({ type: types.DISLIKE_ERROR });

export {
  fetch,
  fetchSuccess,
  fetchError,
  setPage,
  setLimit,
  setOrderBy,
  setSearch,
  dislike,
  dislikeSuccess,
  dislikeError
}