import { put, select } from 'redux-saga/effects'
import API_MARVEL from '../../../axios/apiMarvel'
import API_VOLPIN from '../../../axios/apiMarvelVolpin'
import generateQuery from '../../../utils/generateQueryMarvelAPI'
import * as actions from './actions'
import { IComic } from './types'
import { IApplicationState } from '../../../state/ducks';
import { IAction } from './types'

export function* handleFetch(): Generator {
	const collection = 'comics'

	const page: any = yield select((state: IApplicationState) =>
		state.comics.page);

	const limit: any = yield select((state: IApplicationState) =>
		state.comics.limit);

	const orderBy: any = yield select((state: IApplicationState) =>
		state.comics.orderBy);
	
	const search: any = yield select((state: IApplicationState) =>
		state.comics.search);
	
	const searchType: any = yield select((state: IApplicationState) =>
		state.comics.searchType);

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
	const comics: any = yield select((state: IApplicationState) =>
		state.comics.data.rows);

	const qty = comics.length;
	const ids = comics.reduce((acc: string, character: IComic, index: number) => {
		const id = character.id;
		if (index === qty - 1) return acc += `${id}`;
		return acc += `${id};`;
	}, '');

	try {
		const response: any = yield API_VOLPIN.get(`favoritescomics/${ids}`);
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
		yield API_VOLPIN.post('/favoritescomics', body);
		yield put(actions.likeSuccess());
	} catch (error) {
		yield put(actions.likeError())
	}
}

export function* handleDislike(action: IAction): Generator {
	const marvelId = action.payload;
	try {
		yield API_VOLPIN.delete(`/favoritescomics/${marvelId}`);
		yield put(actions.dislikeSuccess());
	} catch (error) {
		yield put(actions.dislikeError())
	}
}