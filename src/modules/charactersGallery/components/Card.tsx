import React, { useCallback } from 'react';
import { ICharacter, ILikePayload } from '../state/types';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { like, dislike } from '../state/actions';
import { Link } from 'react-router-dom';

interface props {
  character: ICharacter
  isFavorite: boolean
}

const Card: React.FC<props> = ({ character, isFavorite }: props) => {
  const { thumbnail: { path, extension }, name, id } = character;
  const photo = `${path}.${extension}`;

  const dispatch = useDispatch();
  const likeCard = useCallback((payload: ILikePayload) => dispatch(like(payload)), []);
  const dislikeCard = useCallback((payload: ILikePayload['marvelId']) => dispatch(dislike(payload)), []);

  const handleAction = () => {
    if (isFavorite) return dislikeCard(id);
    return likeCard({ marvelId: id, name, photo });
  };

  return (
    <div className="bg-primary rounded-md border-black border flex flex-col overflow-hidden relative">
      <FaHeart
        size={25}
        className={`${isFavorite ? 'text-secondary' : 'text-black' } absolute top-0 right-0 cursor-pointer`}
        onClick={ handleAction }  
      />
      <Link to={`characters/${id}`} className="text-white absolute top-0 left-0 cursor-pointer">
        <FaSearch
          size={25}
        />
      </Link>
      <div className="w-full h-48 bg-primary">
        <img src={`${path}.${extension}`} alt={name} className="object-fit max-w-full max-h-full h-full w-full" />
      </div>
      <p className="w-full text-white text-center text-2xl px-2 truncate hover:whitespace-normal hover:absolute hover:h-full">
        {`${name}`}
      </p>
    </div>
  );
};

export default Card;
