import React from 'react';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IApplicationState } from '../../../state/ducks';


interface props {
  toList: string
}

const Gallery: React.FC<props> = ({ toList }: props) => {
  const comics = useSelector((state: IApplicationState) => state.event.data.comics.items);
  const series = useSelector((state: IApplicationState) => state.event.data.series.items);
  const stories = useSelector((state: IApplicationState) => state.event.data.stories.items);
  const characters = useSelector((state: IApplicationState) => state.event.data.characters.items);

  let items = comics;
  if (toList === 'stories') items = stories;
  if (toList === 'series') items = series;
  if (toList === 'characters') items = characters;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      { items.map((item, index) =>
        <Link
          key={index}
          className="bg-primary rounded-md overflow-ellipsis text-white text-center text-lg p-2 truncate hover:whitespace-normal hover:bg-secondary"
          to={ `${toList !== 'stories' ? `/${toList}/${item.resourceURI.split(`${toList}/`)[1]}` : '#'}` }
        >
          { item.name }
        </Link>
      )}
    </div>
  );
};

export default Gallery;
