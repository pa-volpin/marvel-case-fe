import { types, IEvent } from './types';

const fetch = (payload: IEvent['data']['id']) => ({ type: types.FETCH, payload });

const fetchSuccess = (payload: IEvent['data']) => ({ type: types.FETCH_SUCCESS, payload });

const fetchError = (payload: IEvent['error']) => ({ type: types.FETCH_ERROR, payload });

export {
  fetch,
  fetchSuccess,
  fetchError
}