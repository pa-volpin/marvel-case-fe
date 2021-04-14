import { put, select } from 'redux-saga/effects'
import API from '../../../axios/apiMarvelVolpin'
import generateQuery from '../../../utils/generateQueryVolpinAPI'
import * as actions from './actions'
import { IApplicationState } from '../../../state/ducks';
import { IAction } from './types';

export function* handleFetch(): Generator {
	const collection = 'favoritesseries'

	const page: any = yield select((state: IApplicationState) =>
		state.favoritesSeries.page);

	const limit: any = yield select((state: IApplicationState) =>
		state.favoritesSeries.limit);

	const orderBy: any = yield select((state: IApplicationState) =>
		state.favoritesSeries.orderBy);
	
	const search: any = yield select((state: IApplicationState) =>
		state.favoritesSeries.search);
	
  const query = generateQuery({
		collection,
		page,
		limit,
		orderBy,
		search,
	})

	try {
		const response: any = yield API.get(query);
		const data: any = response.data;
		console.log('RETORNO API PAYLOAD', data);

		yield put(actions.fetchSuccess(data));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.fetchError(error.stack!))
		} else {
			yield put(actions.fetchError('An unknown error occured.'))
		}
	}
}


export function* handleDislike(action: IAction): Generator {
	const marvelId = action.payload;
	try {
		yield API.delete(`/favoritesseries/${marvelId}`);
		yield put(actions.dislikeSuccess());
	} catch (error) {
		yield put(actions.dislikeError())
	}
}