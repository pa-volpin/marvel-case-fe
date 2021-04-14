import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Characters from './modules/charactersGallery/pages/Comics';
import CharacterById from './modules/characterById/pages/CharacterById';
import FavoritesCharacters from './modules/charactersFavorites/pages/FavoritesComics';
import Comics from './modules/comicsGallery/pages/Comics';
import ComicById from './modules/comicById/pages/ComicById';
import FavoritesComics from './modules/comicsFavorites/pages/FavoritesComics';
import Events from './modules/eventsGallery/pages/Events';
import EventById from './modules/eventById/pages/EventById';
import FavoritesEvents from './modules/eventsFavorites/pages/FavoritesEvents';
import Series from './modules/seriesGallery/pages/Series';
import SerieById from './modules/serieById/pages/SerieById';
import FavoritesSeries from './modules/seriesFavorites/pages/FavoritesSeries';
import Profile from './modules/profile/pages/Profile';
import withSession from './withSessionPrivate';

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/characters" />
      <Route path="/characters/:id" component={ withSession(CharacterById) } />
      <Route path="/characters" component={ withSession(Characters) } />
      <Route path="/favoritescharacters" component={ withSession(FavoritesCharacters) } />
      <Route path="/series/:id" component={ withSession(SerieById) } />
      <Route path="/series" component={ withSession(Series) } />
      <Route path="/favoritesseries" component={ withSession(FavoritesSeries) } />
      <Route path="/events/:id" component={ withSession(EventById) } />
      <Route path="/events" component={ withSession(Events) } />
      <Route path="/favoritesevents" component={ withSession(FavoritesEvents) } />
      <Route path="/comics/:id" component={ withSession(ComicById) } />
      <Route path="/comics" component={ withSession(Comics) } />
      <Route path="/favoritescomics" component={ withSession(FavoritesComics) } />
      <Route path="/profile" component={ withSession(Profile) } />
      <Redirect to="/" />
    </Switch>
  );
};

export default PrivateRoutes;
