import { types, ICharacter } from './types';

const fetch = (payload: ICharacter['data']['id']) => ({ type: types.FETCH, payload });

const fetchSuccess = (payload: ICharacter['data']) => ({ type: types.FETCH_SUCCESS, payload });

const fetchError = (payload: ICharacter['error']) => ({ type: types.FETCH_ERROR, payload });

export {
  fetch,
  fetchSuccess,
  fetchError
}