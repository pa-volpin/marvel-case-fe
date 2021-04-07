// import { ICharacters } from './types';
// import { IApplicationState } from '../../../../state/ducks/index';
import { put } from 'redux-saga/effects'
import API from '../../../axios/api'
import generateQuery from '../../../utils/generateQuery'
import * as actions from './actions'

export function* handleFetch(): Generator {
	const collection = 'characters'

  const query = generateQuery({
		collection
	})

	try {
		const response: any = yield API.get(query);
		const data: any = response.data;
		const payload = { count: data.total, rows: data.results };
		yield put(actions.fetchSuccess(payload));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.fetchError(error.stack!))
		} else {
			yield put(actions.fetchError('An unknown error occured.'))
		}
	}
}
