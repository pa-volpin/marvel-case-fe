import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import * as actions from '../state/actions';
import Card from './Card';
import PaginationBar from '../../../design-system/components/PaginationBar';
import { IFavoritesEvents } from '../state/types';
import GalleryTopBar from './GalleryTopBar';
import Loading from '../../../design-system/components/Loading/Loading';
import NoDataWarning from '../../../design-system/components/NoDataWarning/NoDataWarning';

const Gallery: React.FC = () => {
  const minToShow = 4;
  const maxToShow = 100; //API LIMIT 
  const total = useSelector((state: IApplicationState) => state.favoritesEvents.data.count);
  const loading = useSelector((state: IApplicationState) => state.favoritesEvents.loading);
  const error = useSelector((state: IApplicationState) => state.favoritesEvents.error);
  const page = useSelector((state: IApplicationState) => state.favoritesEvents.page);
  const limit = useSelector((state: IApplicationState) => state.favoritesEvents.limit);
  const favoritesEvents = useSelector((state: IApplicationState) => state.favoritesEvents.data.rows);

  const dispatch = useDispatch();

  const fetchEvents = useCallback(() => dispatch(actions.fetch()), []);
  
  const setPage = useCallback((page: IFavoritesEvents['page']) =>
    dispatch(actions.setPage(page)), []);

  const setLimit = useCallback((limit: IFavoritesEvents['limit']) =>
    dispatch(actions.setLimit(limit)), []);

  const setSearch = useCallback((search: IFavoritesEvents['search']) =>
    dispatch(actions.setSearch(search)), []);
  
  const setOrderBy = useCallback((orderBy: IFavoritesEvents['orderBy']) =>
    dispatch(actions.setOrderBy(orderBy)), []);

  useEffect(() => {
    fetchEvents()
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      <GalleryTopBar
        setSearch={ setSearch }
        setOrderBy={ setOrderBy }
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
        {
          !loading && favoritesEvents.map((favorite, index) =>
            <Card key={index} favoriteEvent={favorite} />) 
        }
        { loading && <Loading /> }
        { !loading && favoritesEvents.length < 1  &&
          <div className="w-screen h-full flex flex-col items-center space-y-4 justify-center p-20">
            <NoDataWarning />
            <p className="text-primary text-2xl font-bold">No Favorites</p>
          </div>
        }
      </div>
      {
        !loading && favoritesEvents.length > 0 &&
        <PaginationBar
          total={ total }
          page={ page }
          limit={ limit }
          setPage={ setPage }
          setLimit={ setLimit }
          minToShow={ minToShow }
          maxToShow={ maxToShow }
        />
      }
    </div>
  );
};

export default Gallery;
