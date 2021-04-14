import { put, call } from 'redux-saga/effects';
import API from '../../../axios/apiMarvelVolpin';
import * as actions from './actions';
import { open as openFloatBox } from '../../../design-system/components/FloatBox/state/actions'
import {
	IAction,
	IPayloadPostLogin,
	IPayloadPostRegister,
	IPayloadPostForgotPassword,
	IPayloadPostResetPassword
} from './types';
import history from '../../../state/History';

export function* handleLogin(action: IAction): Generator {
	try {
		const payload: IPayloadPostLogin = action.payload;
		const response: any = yield API.post('/auth/login', payload);
		const data: any = response.data;

		const { name, email, token } = data;
		yield put(actions.loginSuccess({ name, email, token }));
		localStorage.setItem('tokenMarvel', token);
		yield call(history.push, '/');

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.loginError(error.message))
		} else {
			yield put(actions.loginError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 403) message = 'Email or password incorrect.';
		const tag = 'error';
		yield put(openFloatBox({ message, tag }));
	}
}

export function* handleCheckMe(): Generator {
	try {
		const response: any = yield API.post('/auth/checkme');
		const data: any = response.data;
		const { name, email, token } = data;

		localStorage.setItem('tokenMarvel', token);
		yield put(actions.checkMeSuccess({ name, email, token }));
		// yield call(history.push, '/');
	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.checkMeError(error.message))
		} else {
			yield put(actions.checkMeError('An unknown error occured.'))
		}

		localStorage.removeItem('tokenMarvel');
		yield put(actions.clearState());
		yield call(history.push, '/login');
	}
}

export function* handleRegister(action: IAction): Generator {
	try {
		const payload: IPayloadPostRegister = action.payload;
		yield API.post('/register', payload);
		yield put(actions.registerSuccess());

		const message = 'Verification link was sent to you! Please verify your email!';
		const redirect = '/login';
		const tag = 'success';
		yield put(openFloatBox({ message, tag }));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.registerError(error.message))
		} else {
			yield put(actions.registerError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 403) message = 'Email already registred.';
		const tag = 'error';
		yield put(openFloatBox({ message, tag }));
	}
}

export function* handleRegisterConfirmation(): Generator {
	try {
		yield API.post('/users/register');
		yield put(actions.registerConfirmationSuccess());
		
		const message = 'Email verified! Sign in and enjoy!';
		const redirect = '/login';
		const tag = 'success';
		yield put(openFloatBox({ message, redirect, tag }));
		
	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.registerConfirmationError(error.message))
		} else {
			yield put(actions.registerConfirmationError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 401) message = 'Your verification token has expirated. Please register again!';
		const redirect = '/register';
		const tag = 'error';
		yield put(openFloatBox({ message, redirect, tag }));
	}
}

export function* handleForgotPassword(action: IAction): Generator {
	try {
		const payload: IPayloadPostForgotPassword = action.payload;
		yield API.post('/passwordresets', payload);

		yield put(actions.forgotPasswordSuccess());
		const message = 'Reset link was sent to you! Please verify your email!';
		const redirect = '/login';
		const tag = 'success';
		yield put(openFloatBox({ message, redirect, tag }));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.forgotPasswordError(error.message))
		} else {
			yield put(actions.forgotPasswordError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response)  message = 'Sorry, your solicitation cannot be treated. Try again.';
		const tag = 'error';
		yield put(openFloatBox({ message, tag }));
	}
}

export function* handleForgotPasswordConfirmation(): Generator {
	try {
		const response: any = yield API.post('/passwordresets/auth');
		const data = response.data;
		const { token, email } = data;

		localStorage.setItem('tokenMarvel', token);
		yield put(actions.forgotPasswordConfirmationSuccess(email));
		history.push('/resetpassword');
		
	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.forgotPasswordConfirmationError(error.message))
		} else {
			yield put(actions.forgotPasswordConfirmationError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 401) message = 'Your reset token has expirated. Please try again!';
		const redirect = '/forgotpassword';
		const tag = 'error';
		yield put(openFloatBox({ message, redirect, tag }));
	}
}

export function* handleResetPassword(action: IAction): Generator {
	try {
		const payload: IPayloadPostResetPassword = action.payload;
		yield API.post('/users/resetpassword', payload);

		yield put(actions.resetPasswordSuccess());

		const message = 'Your password was reseted! Sign in and enjoy!';
		const redirect = '/login';
		const tag = 'success';
		yield put(openFloatBox({ message, redirect, tag }));

	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.resetPasswordError(error.message))
		} else {
			yield put(actions.resetPasswordError('An unknown error occured.'))
		}

		let message = 'Sorry, we are working to establish the service as soon as possible.'
		if(error.response?.status === 401) message = 'Your reset cannot be treated. Please try again!';
		const redirect = '/forgotpassword';
		const tag = 'error';
		yield put(openFloatBox({ message, redirect, tag }));
	}
}
