import { types } from './types';
import { all, fork, takeLatest } from 'redux-saga/effects';
import {
	handleCheckMe,
	handleLogin,
	handleRegister,
	handleRegisterConfirmation,
	handleForgotPassword,
	handleForgotPasswordConfirmation,
	handleResetPassword
} from './effects';

function* watchFetchRequest(): Generator {
	yield takeLatest(types.LOGIN, handleLogin)
	yield takeLatest(types.CHECK_ME, handleCheckMe)
	yield takeLatest(types.REGISTER, handleRegister)
	yield takeLatest(types.REGISTER_CONFIRMATION, handleRegisterConfirmation)
	yield takeLatest(types.FORGOT_PASSWORD, handleForgotPassword)
	yield takeLatest(types.FORGOT_PASSWORD_CONFIRMATION, handleForgotPasswordConfirmation)
	yield takeLatest(types.RESET_PASSWORD, handleResetPassword)


}

export default function* authSaga() {
	yield all([
		fork(watchFetchRequest)
	])
}
