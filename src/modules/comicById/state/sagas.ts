import { types } from './types';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { handleFetch } from './effects';

function* watchFetchRequest(): Generator {
	yield takeLatest(types.FETCH, handleFetch)
}

export default function* comicSaga() {
	yield all([
		fork(watchFetchRequest)
	])
}
