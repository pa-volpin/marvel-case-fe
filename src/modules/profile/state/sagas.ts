import { types } from './types';
import { all, fork, takeLatest } from 'redux-saga/effects';
import {
	handleGetMe,
	handleChangeName,
	handleChangePassword
} from './effects';

function* watchFetchRequest(): Generator {
	yield takeLatest(types.GET_ME, handleGetMe);
	yield takeLatest(types.CHANGE_NAME, handleChangeName)
	yield takeLatest(types.CHANGE_PASSWORD, handleChangePassword)
}

export default function* profileSaga() {
	yield all([
		fork(watchFetchRequest)
	])
}
