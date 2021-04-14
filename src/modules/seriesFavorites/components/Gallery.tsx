import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import * as actions from '../state/actions';
import Card from './Card';
import PaginationBar from '../../../design-system/components/PaginationBar';
import { IFavoritesSeries } from '../state/types';
import GalleryTopBar from './GalleryTopBar';
import Loading from '../../../design-system/components/Loading/Loading';
import NoDataWarning from '../../../design-system/components/NoDataWarning/NoDataWarning';

const Gallery: React.FC = () => {
  const minToShow = 4;
  const maxToShow = 100; //API LIMIT 
  const total = useSelector((state: IApplicationState) => state.favoritesSeries.data.count);
  const loading = useSelector((state: IApplicationState) => state.favoritesSeries.loading);
  const error = useSelector((state: IApplicationState) => state.favoritesSeries.error);
  const page = useSelector((state: IApplicationState) => state.favoritesSeries.page);
  const limit = useSelector((state: IApplicationState) => state.favoritesSeries.limit);
  const favoritesSeries = useSelector((state: IApplicationState) => state.favoritesSeries.data.rows);

  const dispatch = useDispatch();

  const fetchSeries = useCallback(() => dispatch(actions.fetch()), []);
  
  const setPage = useCallback((page: IFavoritesSeries['page']) =>
    dispatch(actions.setPage(page)), []);

  const setLimit = useCallback((limit: IFavoritesSeries['limit']) =>
    dispatch(actions.setLimit(limit)), []);

  const setSearch = useCallback((search: IFavoritesSeries['search']) =>
    dispatch(actions.setSearch(search)), []);
  
  const setOrderBy = useCallback((orderBy: IFavoritesSeries['orderBy']) =>
    dispatch(actions.setOrderBy(orderBy)), []);

  useEffect(() => {
    fetchSeries()
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      <GalleryTopBar
        setSearch={ setSearch }
        setOrderBy={ setOrderBy }
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
        {
          !loading && favoritesSeries.map((favorite, index) =>
            <Card key={index} favoriteCharacter={favorite} />) 
        }
        { loading && <Loading /> }
        { !loading && favoritesSeries.length < 1  &&
          <div className="w-screen h-full flex flex-col items-center space-y-4 justify-center p-20">
            <NoDataWarning />
            <p className="text-primary text-2xl font-bold">No Favorites</p>
          </div>
        }
      </div>
      {
        !loading && favoritesSeries.length > 0 &&
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
