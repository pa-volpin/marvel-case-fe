import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import * as actions from '../state/actions';
import Card from './Card';
import PaginationBar from '../../../design-system/components/PaginationBar';
import { IFavoritesComics } from '../state/types';
import GalleryTopBar from './GalleryTopBar';
import Loading from '../../../design-system/components/Loading/Loading';
import NoDataWarning from '../../../design-system/components/NoDataWarning/NoDataWarning';

const Gallery: React.FC = () => {
  const minToShow = 4;
  const maxToShow = 100; //API LIMIT 
  const total = useSelector((state: IApplicationState) => state.favoritesComics.data.count);
  const loading = useSelector((state: IApplicationState) => state.favoritesComics.loading);
  const error = useSelector((state: IApplicationState) => state.favoritesComics.error);
  const page = useSelector((state: IApplicationState) => state.favoritesComics.page);
  const limit = useSelector((state: IApplicationState) => state.favoritesComics.limit);
  const favoriteComics = useSelector((state: IApplicationState) => state.favoritesComics.data.rows);

  const dispatch = useDispatch();

  const fetchComics = useCallback(() => dispatch(actions.fetch()), []);
  
  const setPage = useCallback((page: IFavoritesComics['page']) =>
    dispatch(actions.setPage(page)), []);

  const setLimit = useCallback((limit: IFavoritesComics['limit']) =>
    dispatch(actions.setLimit(limit)), []);

  const setSearch = useCallback((search: IFavoritesComics['search']) =>
    dispatch(actions.setSearch(search)), []);
  
  const setOrderBy = useCallback((orderBy: IFavoritesComics['orderBy']) =>
    dispatch(actions.setOrderBy(orderBy)), []);

  useEffect(() => {
    fetchComics()
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      <GalleryTopBar
        setSearch={ setSearch }
        setOrderBy={ setOrderBy }
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
        {
          !loading && favoriteComics.map((favorite, index) =>
            <Card key={index} favoriteCharacter={favorite} />) 
        }
        { loading && <Loading /> }
        { !loading && favoriteComics.length < 1  &&
          <div className="w-screen h-full flex flex-col items-center space-y-4 justify-center p-20">
            <NoDataWarning />
            <p className="text-primary text-2xl font-bold">No Favorites</p>
          </div>
        }
      </div>
      {
        !loading && favoriteComics.length > 0 &&
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
