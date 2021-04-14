import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import * as actions from '../state/actions';
import Card from './Card';
import PaginationBar from '../../../design-system/components/PaginationBar';
import { ISeries } from '../state/types';
import GalleryTopBar from './GalleryTopBar';
import Loading from '../../../design-system/components/Loading/Loading';
import NoDataWarning from '../../../design-system/components/NoDataWarning/NoDataWarning';

const Gallery: React.FC = () => {
  const minToShow = 4;
  const maxToShow = 100; //API LIMIT 
  const series = useSelector((state: IApplicationState) => state.series.data.rows);
  const total = useSelector((state: IApplicationState) => state.series.data.count);
  const loading = useSelector((state: IApplicationState) => state.series.loading);
  const error = useSelector((state: IApplicationState) => state.series.error);
  const page = useSelector((state: IApplicationState) => state.series.page);
  const limit = useSelector((state: IApplicationState) => state.series.limit);
  const favorites = useSelector((state: IApplicationState) => state.series.favorites.data);

  const dispatch = useDispatch();

  const fetchSeries = useCallback(() => dispatch(actions.fetch()), []);
  
  const setPage = useCallback((page: ISeries['page']) =>
    dispatch(actions.setPage(page)), []);

  const setLimit = useCallback((limit: ISeries['limit']) =>
    dispatch(actions.setLimit(limit)), []);

  const setSearch = useCallback((search: ISeries['search']) =>
    dispatch(actions.setSearch(search)), []);
  
  const setSearchType = useCallback((searchType: ISeries['searchType']) =>
    dispatch(actions.setSearchType(searchType)), []);
  
  const setOrderBy = useCallback((orderBy: ISeries['orderBy']) =>
    dispatch(actions.setOrderBy(orderBy)), []);

  useEffect(() => {
    fetchSeries()
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
          !loading && series.map((serie, index) =>
            <Card
              key={index}
              serie={serie}
              isFavorite={favorites && favorites.includes((serie.id).toString())}
            />) 
        }
        { loading && <div className="w-screen h-screen fixed"><Loading /></div> }
        { !loading && series.length < 1  &&
          <div className="w-screen h-full flex flex-col items-center space-y-4 justify-center p-20">
            <NoDataWarning />
            <p className="text-primary text-2xl font-bold">No Data</p>
          </div>
        }
      </div>
      {
        !loading && series.length > 0 &&
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
