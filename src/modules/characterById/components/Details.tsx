import React, { useCallback, useEffect, useState } from 'react';
import { ICharacter } from '../state/types';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from '../state/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IApplicationState } from '../../../state/ducks';
import { isEmpty } from 'lodash';
import Gallery from '../components/Gallery';
import history from '../../../state/History';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from '../../../design-system/components/Loading/Loading';

const Details: React.FC<RouteComponentProps> = (props) => {
  const [toList, setToList] = useState('comics');

  const { location: { pathname } } = props;
  const id = pathname.split('characters/')[1];

  const dispatch = useDispatch();

  const fetchCharacter = useCallback((payload: ICharacter['data']['id']) =>
    dispatch(fetch(payload)), []);
  
  const character = useSelector((state: IApplicationState) => state.character.data);
  const loading = useSelector((state: IApplicationState) => state.character.loading);
  const error = useSelector((state: IApplicationState) => state.character.error);

  useEffect(() => {
    fetchCharacter(id);
  }, []);

  const buttons = [
    { label: 'Comics', qty: character?.comics?.returned || 0, option: 'comics' },
    { label: 'Events', qty: character?.events?.returned || 0, option: 'events' },
    { label: 'Series', qty: character?.series?.returned || 0, option: 'series' },
    { label: 'Stories', qty: character?.stories?.returned || 0, option: 'stories' },
  ];

  return (
    <div className="flex flex-col space-y-4 relative h-screen">
      <div className="w-full absolute top-0 left-2">
        <button
          onClick={() => history.goBack() }
          className="text-white bg-secondary px-2 py-1 rounded-md flex items-center space-x-2"
        >
          <FaArrowLeft />
          <p>Back</p>
        </button>
      </div>
      { loading && <Loading />}
      { error !== '' && !loading && isEmpty(character) && <p>{ `Houve Erro ${error}` }</p> }
      { !loading && !isEmpty(character) && 
        <div className="flex flex-col space-y-2 md:space-y-4">
          <div className="bg-primary rounded-md flex flex-col">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-10">
              <div className="w-full md:w-1/3 h-48 bg-primary rounded-md overflow-hidden">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="object-fit max-w-full max-h-full h-full w-full" />
              </div>
              <div className="flex flex-col space-y-4 p-2 md:border md:border-white rounded-md items-center md:items-start ">
                <p className="w-full text-white text-2xl px-2 truncate hover:whitespace-normal hover:absolute hover:h-full">
                  {`${character.name}`}
                </p>
                <p className="w-full text-white text-lg px-2">
                  { character.description }
                </p>
                <div className="w-full flex space-x-3 text-md md:text-lg text-white">
                  { buttons.map((btn, index) =>
                    <button
                      key={index}
                      onClick={ () => setToList(btn.option) }
                      className={`px-2 py-1 rounded-md cursor-pointer border-secondary border-2 ${toList === btn.option && 'bg-secondary '} ${btn.qty === 0 && 'hidden'}`}
                    >
                      { `${btn.label}: ${btn.qty}` }
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Gallery toList={ toList } />
        </div>
      }
    </div>
  );
};

export default withRouter(Details);
