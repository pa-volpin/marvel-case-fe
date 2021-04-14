import { put, select } from 'redux-saga/effects'
import API_MARVEL from '../../../axios/apiMarvel'
import API_VOLPIN from '../../../axios/apiMarvelVolpin'
import generateQuery from '../../../utils/generateQueryMarvelAPI'
import * as actions from './actions'
import { IEvent } from './types'
import { IApplicationState } from '../../../state/ducks';
import { IAction } from './types'

export function* handleFetch(): Generator {
	const collection = 'events'

	const page: any = yield select((state: IApplicationState) =>
		state.events.page);

	const limit: any = yield select((state: IApplicationState) =>
		state.events.limit);

	const orderBy: any = yield select((state: IApplicationState) =>
		state.events.orderBy);
	
	const search: any = yield select((state: IApplicationState) =>
		state.events.search);
	
	const searchType: any = yield select((state: IApplicationState) =>
		state.events.searchType);

	const offset = (page - 1) * limit;

  const query = generateQuery({
		collection,
		offset,
		limit,
		orderBy,
		search,
		searchType
	})

	try {
		const response: any = yield API_MARVEL.get(query);
		const data: any = response.data.data;

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

export function* handleFetchFavorites(): Generator {
	const events: any = yield select((state: IApplicationState) =>
		state.events.data.rows);

	const qty = events.length;
	const ids = events.reduce((acc: string, event: IEvent, index: number) => {
		const id = event.id;
		if (index === qty - 1) return acc += `${id}`;
		return acc += `${id};`;
	}, '');

	try {
		const response: any = yield API_VOLPIN.get(`favoritesevents/${ids}`);
		const data: any = response.data.ids;
		yield put(actions.fetchFavoritesSuccess(data));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.fetchFavoritesError(error.stack!))
		} else {
			yield put(actions.fetchFavoritesError('An unknown error occured.'))
		}
	}
}

export function* handleLike(action: IAction): Generator {
	const { marvelId, name, photo } = action.payload;
	const body = { name, marvelId, photo };
	try {
		yield API_VOLPIN.post('/favoritesevents', body);
		yield put(actions.likeSuccess());
	} catch (error) {
		yield put(actions.likeError())
	}
}

export function* handleDislike(action: IAction): Generator {
	const marvelId = action.payload;
	try {
		yield API_VOLPIN.delete(`/favoritesevents/${marvelId}`);
		yield put(actions.dislikeSuccess());
	} catch (error) {
		yield put(actions.dislikeError())
	}
}