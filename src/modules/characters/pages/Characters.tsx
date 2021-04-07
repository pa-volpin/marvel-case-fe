import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import { fetch } from '../state/actions';
import Gallery from '../components/Gallery';

const Characters: React.FC = () => {
  const characters = useSelector((state: IApplicationState) => state.characters.data.rows);
  const loading = useSelector((state: IApplicationState) => state.characters.loading);
  const error = useSelector((state: IApplicationState) => state.characters.error);
  const dispatch = useDispatch();

  const fetchCharacters = useCallback(() => dispatch(fetch()), []);

  useEffect(() => {
    fetchCharacters()
  }, []);

  console.log(characters)

  return (
    <div>
      <Gallery />
    </div>
  );
};

export default Characters;
