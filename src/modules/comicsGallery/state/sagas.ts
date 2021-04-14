import { types } from './types';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { handleFetch, handleFetchFavorites, handleLike, handleDislike } from './effects';

function* watchFetchRequest(): Generator {
	yield takeLatest(types.FETCH, handleFetch)
	yield takeLatest(types.SET_PAGE, handleFetch)
	yield takeLatest(types.SET_LIMIT, handleFetch)
	yield takeLatest(types.SET_ORDER_BY, handleFetch)
	yield takeLatest(types.SET_SEARCH, handleFetch)
	yield takeLatest(types.SET_SEARCH_TYPE, handleFetch)
	yield takeLatest(types.FETCH_SUCCESS, handleFetchFavorites)
	yield takeLatest(types.LIKE, handleLike)
	yield takeLatest(types.LIKE_SUCCESS, handleFetchFavorites)
	yield takeLatest(types.DISLIKE, handleDislike)
	yield takeLatest(types.DISLIKE_SUCCESS, handleFetchFavorites)
}

export default function* comicsSaga() {
	yield all([
		fork(watchFetchRequest)
	])
}
