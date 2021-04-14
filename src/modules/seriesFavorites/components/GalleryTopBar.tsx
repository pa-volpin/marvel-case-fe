import React, { useState } from 'react'
import SearchBar from '../../../design-system/components/InputsTopBar/SearchBar'
import OrderBy from '../../../design-system/components/InputsTopBar/OrderBy'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface props {
  setSearch: CallableFunction
  setOrderBy: CallableFunction
}

const GalleryTopBar: React.FC<props> = ({ setSearch, setOrderBy }: props) => {
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    { value: 'title', label: 'Title ASC' },
    { value: '-title', label: 'Title DESC' },
  ];

  return (
    <div className="w-full text-primary bg-primary rounded-md">
      <div className="md:hidden text-center flex flex-col space-y-2 px-2 py-3">
        <button
          className={`text-white focus:outline-none flex justify-center w-full space-x-1 ${showOptions && 'border-b-2 border-white pb-2'} `}
          onClick={ () => setShowOptions(prev => !prev) }
        >
          <FaArrowDown size={20} className={`${showOptions && 'hidden'}`} />
          <p>Options</p>
          <FaArrowUp size={20} className={ `${!showOptions && 'hidden'}`} />
        </button>
        <div className={`${!showOptions && 'hidden' } flex flex-col space-y-2`}>
          <SearchBar setSearch={ setSearch } />
          <OrderBy setOrderBy={ setOrderBy } options={options} />
          </div>
      </div>
      <div className="hidden md:flex items-center space-x-2 justify-start p-5">
        <SearchBar setSearch={ setSearch } />
        <OrderBy setOrderBy={ setOrderBy } options={options} />
      </div>
    </div>
  )
}

export default GalleryTopBar