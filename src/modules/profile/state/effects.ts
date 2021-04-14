import { put } from 'redux-saga/effects';
import API from '../../../axios/apiMarvelVolpin';
import * as actions from './actions';
import { open as openFloatBox } from '../../../design-system/components/FloatBox/state/actions'
import {
	IAction,
	IProfilePayloadPostChangeName,
	IProfilePayloadPostChangePassword
} from './types';

export function* handleGetMe(): Generator {
	try {
		const response: any = yield API.get('/users/getme');
		const data: any = response.data;

		const { name, email } = data;
		yield put(actions.getMeSuccess({ name, email }));
	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.changeNameError(error.message))
		} else {
			yield put(actions.changeNameError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 400) message = 'Sorry, your personal data cannot be loaded now.';
		yield put(openFloatBox({ message }));
	}
}

export function* handleChangeName(action: IAction): Generator {
	try {
		const payload: IProfilePayloadPostChangeName = action.payload;
		const response: any = yield API.post('/users/changename', payload);
		const data: any = response.data;

		const { name, email } = data;
		yield put(actions.changeNameSuccess({ name, email }));
		let message = 'Name updated with success!'
		yield put(openFloatBox({ message }));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.changeNameError(error.message))
		} else {
			yield put(actions.changeNameError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 400) message = 'Sorry, your name was not updated.';
		yield put(openFloatBox({ message }));
	}
}

export function* handleChangePassword(action: IAction): Generator {
	try {
		const payload: IProfilePayloadPostChangePassword = action.payload;
		const response: any = yield API.post('/users/changepassword', payload);
		const data: any = response.data;

		const { name, email } = data;
		yield put(actions.changePasswordSuccess({ name, email }));
		let message = 'Password updated with success!'
		yield put(openFloatBox({ message }));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.changePasswordError(error.message))
		} else {
			yield put(actions.changePasswordError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 400) message = 'Sorry, your password was not updated.';
		yield put(openFloatBox({ message }));
	}
}
