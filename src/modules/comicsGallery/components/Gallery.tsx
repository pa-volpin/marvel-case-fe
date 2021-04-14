import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import * as actions from '../state/actions';
import Card from './Card';
import PaginationBar from '../../../design-system/components/PaginationBar';
import { IComics } from '../state/types';
import GalleryTopBar from './GalleryTopBar';
import Loading from '../../../design-system/components/Loading/Loading';
import NoDataWarning from '../../../design-system/components/NoDataWarning/NoDataWarning';

const Gallery: React.FC = () => {
  const minToShow = 4;
  const maxToShow = 100; //API LIMIT 
  const comics = useSelector((state: IApplicationState) => state.comics.data.rows);
  const total = useSelector((state: IApplicationState) => state.comics.data.count);
  const loading = useSelector((state: IApplicationState) => state.comics.loading);
  const error = useSelector((state: IApplicationState) => state.comics.error);
  const page = useSelector((state: IApplicationState) => state.comics.page);
  const limit = useSelector((state: IApplicationState) => state.comics.limit);
  const favorites = useSelector((state: IApplicationState) => state.comics.favorites.data);

  const dispatch = useDispatch();

  const fetchComics = useCallback(() => dispatch(actions.fetch()), []);
  
  const setPage = useCallback((page: IComics['page']) =>
    dispatch(actions.setPage(page)), []);

  const setLimit = useCallback((limit: IComics['limit']) =>
    dispatch(actions.setLimit(limit)), []);

  const setSearch = useCallback((search: IComics['search']) =>
    dispatch(actions.setSearch(search)), []);
  
  const setSearchType = useCallback((searchType: IComics['searchType']) =>
    dispatch(actions.setSearchType(searchType)), []);
  
  const setOrderBy = useCallback((orderBy: IComics['orderBy']) =>
    dispatch(actions.setOrderBy(orderBy)), []);

  useEffect(() => {
    fetchComics()
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      <GalleryTopBar
        setSearch={ setSearch }
        setSearchType={ setSearchType }
        setOrderBy={ setOrderBy }
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
        {
          !loading && comics.map((comic, index) =>
            <Card
              key={index}
              comic={comic}
              isFavorite={favorites && favorites.includes((comic.id).toString())}
            />) 
        }
        { loading && <div className="w-screen h-screen fixed"><Loading /></div> }
        { !loading && comics.length < 1  &&
          <div className="w-screen h-full flex flex-col items-center space-y-4 justify-center p-20">
            <NoDataWarning />
            <p className="text-primary text-2xl font-bold">No Data</p>
          </div>
        }
      </div>
      {
        !loading && comics.length > 0 &&
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
