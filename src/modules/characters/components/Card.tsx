import React from 'react';
import { ICharacter } from '../state/types';

interface props {
  character: ICharacter
}
const Gallery: React.FC<props> = ({ character }: props) => {
  const { thumbnail: { path, extension }, name, description } = character;

  return (
    <div className="bg-white rounded-md border-black flex flex-col">
      <img src={`${path}.${extension}`} alt={name} />
      <p>{`Name: ${name}`}</p>
      <p>{`Description: ${description}`}</p>
    </div>
  );
};

export default Gallery;