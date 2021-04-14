import { types, ISerie } from './types';

const fetch = (payload: ISerie['data']['id']) => ({ type: types.FETCH, payload });

const fetchSuccess = (payload: ISerie['data']) => ({ type: types.FETCH_SUCCESS, payload });

const fetchError = (payload: ISerie['error']) => ({ type: types.FETCH_ERROR, payload });

export {
  fetch,
  fetchSuccess,
  fetchError
}