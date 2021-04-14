import { types } from './types';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { handleFetch, handleDislike } from './effects';

function* watchFetchRequest(): Generator {
	yield takeLatest(types.FETCH, handleFetch)
	yield takeLatest(types.SET_PAGE, handleFetch)
	yield takeLatest(types.SET_LIMIT, handleFetch)
	yield takeLatest(types.SET_ORDER_BY, handleFetch)
	yield takeLatest(types.SET_SEARCH, handleFetch)
	yield takeLatest(types.DISLIKE, handleDislike)
	yield takeLatest(types.DISLIKE_SUCCESS, handleFetch)
}

export default function* favoritesEventsSaga() {
	yield all([
		fork(watchFetchRequest)
	])
}
