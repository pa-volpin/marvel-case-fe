import { types, IComic } from './types';

const fetch = (payload: IComic['data']['id']) => ({ type: types.FETCH, payload });

const fetchSuccess = (payload: IComic['data']) => ({ type: types.FETCH_SUCCESS, payload });

const fetchError = (payload: IComic['error']) => ({ type: types.FETCH_ERROR, payload });

export {
  fetch,
  fetchSuccess,
  fetchError
}