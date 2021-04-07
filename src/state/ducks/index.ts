import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import charactersReducer from '../../modules/characters/state/reducers';
import charactersSaga from '../../modules/characters/state/sagas'
import { ICharacters } from '../../modules/characters/state/types'

export interface IApplicationState {
	characters: ICharacters
}

export const rootReducer = combineReducers<IApplicationState>({
	characters: charactersReducer,
})

export function* rootSaga() {
	yield all([
    fork(charactersSaga)
	])
}
