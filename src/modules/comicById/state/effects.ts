import { put } from 'redux-saga/effects'
import API_MARVEL from '../../../axios/apiMarvel'
import generateQuery from '../../../utils/generateQueryMarvelAPI';
import * as actions from './actions'
import { IAction } from './types'

export function* handleFetch(action: IAction): Generator {
	const collection = 'comics'
	const id = action.payload;
	const query = generateQuery({ collection, id });
	try {
		const response: any = yield API_MARVEL.get(query);
		const data: any = response.data.data;
		const payload = data.results[0];
		yield put(actions.fetchSuccess(payload));
	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.fetchError(error.stack!))
		} else {
			yield put(actions.fetchError('An unknown error occured.'))
		}
	}
}
