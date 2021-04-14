import React, { useCallback } from 'react';
import { IFavorite } from '../state/types';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { dislike } from '../state/actions';
import { Link } from 'react-router-dom';

interface props {
  favoriteCharacter: IFavorite
}

const Card: React.FC<props> = ({ favoriteCharacter }: props) => {
  const { photo, name, marvelId } = favoriteCharacter;

  const dispatch = useDispatch();
  const dislikeCard = useCallback((payload: IFavorite['marvelId']) => dispatch(dislike(payload)), []);

  const handleAction = () => {
    return dislikeCard(marvelId);
  };

  return (
    <div className="bg-primary rounded-md border-black border flex flex-col overflow-hidden relative">
      <FaHeart
        size={25}
        className="text-secondary absolute top-0 right-0 cursor-pointer"
        onClick={ handleAction }  
      />
      <Link to={`characters/${marvelId}`} className="text-white absolute top-0 left-0 cursor-pointer">
        <FaSearch
          size={25}
        />
      </Link>
      <div className="w-full h-48 bg-primary">
        <img src={photo} alt={name} className="object-fit max-w-full max-h-full h-full w-full" />
      </div>
      <p className="w-full text-white text-center text-2xl px-2 truncate hover:whitespace-normal hover:absolute hover:h-full">
        {name}
      </p>
    </div>
  );
};

export default Card;
