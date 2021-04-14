import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import authReducer from '../../modules/auth/state/reducers';
import authSaga from '../../modules/auth/state/sagas';
import { IAuth } from '../../modules/auth/state/types';

import { IFloatBox } from '../../design-system/components/FloatBox/state/types';
import floatBoxReducer from '../../design-system/components/FloatBox/state/reducers';

import { IProfile } from '../../modules/profile/state/types';
import profileReducer from '../../modules/profile/state/reducers';
import profileSaga from '../../modules/profile/state/sagas';

import charactersReducer from '../../modules/charactersGallery/state/reducers';
import charactersSaga from '../../modules/charactersGallery/state/sagas'
import { ICharacters } from '../../modules/charactersGallery/state/types'

import { IFavoritesCharacters } from '../../modules/charactersFavorites/state/types';
import favoritesCharactersReducer from '../../modules/charactersFavorites/state/reducers';
import favoritesCharactersSaga from '../../modules/charactersFavorites/state/sagas';

import characterReducer from '../../modules/characterById/state/reducers';
import characterSaga from '../../modules/characterById/state/sagas';
import { ICharacter } from '../../modules/characterById/state/types';

import eventsReducer from '../../modules/eventsGallery/state/reducers';
import eventsSaga from '../../modules/eventsGallery/state/sagas';
import { IEvents } from '../../modules/eventsGallery/state/types';

import { IFavoritesEvents } from '../../modules/eventsFavorites/state/types';
import favoritesEventsReducer from '../../modules/eventsFavorites/state/reducers';
import favoritesEventsSaga from '../../modules/eventsFavorites/state/sagas';

import eventReducer from '../../modules/eventById/state/reducers';
import eventSaga from '../../modules/eventById/state/sagas';
import { IEvent } from '../../modules/eventById/state/types';

import comicReducer from '../../modules/comicById/state/reducers';
import comicSaga from '../../modules/comicById/state/sagas';
import { IComic } from '../../modules/comicById/state/types';

import { IComics } from '../../modules/comicsGallery/state/types';
import comicsReducer from '../../modules/comicsGallery/state/reducers';
import comicsSaga from '../../modules/comicsGallery/state/sagas';

import { IFavoritesComics } from '../../modules/comicsFavorites/state/types';
import favoritesComicsReducer from '../../modules/comicsFavorites/state/reducers';
import favoritesComicsSaga from '../../modules/comicsFavorites/state/sagas';

import serieReducer from '../../modules/serieById/state/reducers';
import serieSaga from '../../modules/serieById/state/sagas';
import { ISerie } from '../../modules/serieById/state/types';

import { ISeries } from '../../modules/seriesGallery/state/types';
import seriesReducer from '../../modules/seriesGallery/state/reducers';
import seriesSaga from '../../modules/seriesGallery/state/sagas';

import { IFavoritesSeries } from '../../modules/seriesFavorites/state/types';
import favoritesSeriesReducer from '../../modules/seriesFavorites/state/reducers';
import favoritesSeriesSaga from '../../modules/seriesFavorites/state/sagas';


export interface IApplicationState {
	auth: IAuth
	profile: IProfile
	characters: ICharacters
	character: ICharacter
	favoritesCharacters: IFavoritesCharacters
	comics: IComics
	comic: IComic
	favoritesComics: IFavoritesComics
	events: IEvents
	event: IEvent
	favoritesEvents: IFavoritesEvents
	series: ISeries
	serie: ISerie
	favoritesSeries: IFavoritesSeries
	floatBox: IFloatBox
}

export const rootReducer = combineReducers<IApplicationState>({
	auth: authReducer,
	profile: profileReducer,
	characters: charactersReducer,
	character: characterReducer,
	favoritesCharacters: favoritesCharactersReducer,
	comics: comicsReducer,
	comic: comicReducer,
	favoritesComics: favoritesComicsReducer,
	events: eventsReducer,
	event: eventReducer,
	favoritesEvents: favoritesEventsReducer,
	series: seriesReducer,
	serie: serieReducer,
	favoritesSeries: favoritesSeriesReducer,
	floatBox: floatBoxReducer
});

export function* rootSaga() {
	yield all([
		fork(charactersSaga),
		fork(favoritesCharactersSaga),
		fork(characterSaga),
		fork(comicsSaga),
		fork(favoritesComicsSaga),
		fork(comicSaga),
		fork(authSaga),
		fork(profileSaga),
		fork(eventsSaga),
		fork(favoritesEventsSaga),
		fork(eventSaga),
		fork(seriesSaga),
		fork(favoritesSeriesSaga),
		fork(serieSaga),
	])
}
