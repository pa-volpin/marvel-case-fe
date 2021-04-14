import { types, IEvents, ILikePayload } from './types';

const fetch = () => ({ type: types.FETCH });

const fetchSuccess = (payload: IEvents['data']) => ({ type: types.FETCH_SUCCESS, payload });

const fetchError = (payload: IEvents['error']) => ({ type: types.FETCH_ERROR, payload });

const setPage = (payload: IEvents['page']) => ({ type: types.SET_PAGE, payload });

const setLimit = (payload: IEvents['limit']) => ({ type: types.SET_LIMIT, payload });

const setOrderBy = (payload: IEvents['orderBy']) => ({ type: types.SET_ORDER_BY, payload });

const setSearch = (payload: IEvents['search']) => ({ type: types.SET_SEARCH, payload });

const setSearchType = (payload: IEvents['searchType']) =>
  ({ type: types.SET_SEARCH_TYPE, payload });

const fetchFavorites = (payload: IEvents['favorites']['data']) =>
  ({ type: types.FETCH_FAVORITES, payload });

const fetchFavoritesSuccess = (payload: IEvents['favorites']['data']) =>
  ({ type: types.FETCH_FAVORITES_SUCCESS, payload });

const fetchFavoritesError = (payload: IEvents['favorites']['error']) =>
  ({ type: types.FETCH_FAVORITES_ERROR, payload });

const like = (payload: ILikePayload) => ({ type: types.LIKE, payload });

const likeSuccess = () => ({ type: types.LIKE_SUCCESS });

const likeError = () => ({ type: types.LIKE_ERROR });

const dislike =  (payload: ILikePayload['marvelId']) => ({ type: types.DISLIKE, payload });

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
  setSearchType,
  fetchFavorites,
  fetchFavoritesSuccess,
  fetchFavoritesError,
  like,
  likeSuccess,
  likeError,
  dislike,
  dislikeSuccess,
  dislikeError
}