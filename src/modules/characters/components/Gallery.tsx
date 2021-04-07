import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import { fetch } from '../state/actions';
import Card from '../components/Card';

const Gallery: React.FC = () => {
  const characters = useSelector((state: IApplicationState) => state.characters.data.rows);
  const loading = useSelector((state: IApplicationState) => state.characters.loading);
  const error = useSelector((state: IApplicationState) => state.characters.error);
  const dispatch = useDispatch();

  const fetchCharacters = useCallback(() => dispatch(fetch()), []);

  useEffect(() => {
    fetchCharacters()
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {
        !loading && characters.map((character, index) =>
          <Card key={index} character={character} />) 
      }
      { loading && <p>Carregando</p> }
      { error !== '' && !loading && <p>{ `Houve Erro ${error}` }</p> }
    </div>
  );
};

export default Gallery;
