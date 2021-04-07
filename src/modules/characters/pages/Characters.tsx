import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import { fetch } from '../state/actions';

const Characters: React.FC = () => {
  const characters = useSelector((state: IApplicationState) => state.characters.data);
  const loading = useSelector((state: IApplicationState) => state.characters.loading);
  const error = useSelector((state: IApplicationState) => state.characters.error);
  const dispatch = useDispatch();

  const fetchCharacters = useCallback(() => dispatch(fetch()), [dispatch]);

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters]);

  return (
    <div>
      { !loading && characters.map((character, index) => <p key={index}>{character.name}</p>) }
      { loading && <p>Carregando</p> }
      { error !== '' && !loading && <p>{ `Houve Erro ${error}` }</p> }
    </div>
  );
};

export default Characters;
