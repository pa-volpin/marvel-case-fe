import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import * as actions from '../state/actions';
import Card from './Card';
import PaginationBar from '../../../design-system/components/PaginationBar';
import { ICharacters } from '../state/types';
import GalleryTopBar from './GalleryTopBar';
import Loading from '../../../design-system/components/Loading/Loading';
import NoDataWarning from '../../../design-system/components/NoDataWarning/NoDataWarning';

const Gallery: React.FC = () => {
  const minToShow = 4;
  const maxToShow = 100; //API LIMIT 
  const characters = useSelector((state: IApplicationState) => state.characters.data.rows);
  const total = useSelector((state: IApplicationState) => state.characters.data.count);
  const loading = useSelector((state: IApplicationState) => state.characters.loading);
  const error = useSelector((state: IApplicationState) => state.characters.error);
  const page = useSelector((state: IApplicationState) => state.characters.page);
  const limit = useSelector((state: IApplicationState) => state.characters.limit);
  const favorites = useSelector((state: IApplicationState) => state.characters.favorites.data);

  const dispatch = useDispatch();

  const fetchCharacters = useCallback(() => dispatch(actions.fetch()), []);
  
  const setPage = useCallback((page: ICharacters['page']) =>
    dispatch(actions.setPage(page)), []);

  const setLimit = useCallback((limit: ICharacters['limit']) =>
    dispatch(actions.setLimit(limit)), []);

  const setSearch = useCallback((search: ICharacters['search']) =>
    dispatch(actions.setSearch(search)), []);
  
  const setSearchType = useCallback((searchType: ICharacters['searchType']) =>
    dispatch(actions.setSearchType(searchType)), []);
  
  const setOrderBy = useCallback((orderBy: ICharacters['orderBy']) =>
    dispatch(actions.setOrderBy(orderBy)), []);

  useEffect(() => {
    fetchCharacters()
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
          !loading && characters.map((character, index) =>
            <Card
              key={index}
              character={character}
              isFavorite={favorites && favorites.includes((character.id).toString())}
            />) 
        }
        { loading && <div className="w-screen h-screen fixed"><Loading /></div> }
        { !loading && characters.length < 1  &&
          <div className="w-screen h-full flex flex-col items-center space-y-4 justify-center p-20">
            <NoDataWarning />
            <p className="text-primary text-2xl font-bold">No Data</p>
          </div>
        }
      </div>
      {
        !loading && characters.length > 0 &&
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
