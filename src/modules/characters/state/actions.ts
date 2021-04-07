import { types, ICharacters } from './types';

const fetch = () => ({ type: types.FETCH });

const fetchSuccess = (payload: ICharacters['data']) => ({ type: types.FETCH_SUCCESS, payload });

const fetchError = (payload: ICharacters['error']) => ({ type: types.FETCH_ERROR, payload });


export {
  fetch,
  fetchSuccess,
  fetchError
}