import React, { useState, useEffect } from 'react'

interface props {
  setSearchType: CallableFunction,
  options: Array<{ value: string, label: string }>
}

const SearchType: React.FC<props> = ({ setSearchType, options }: props) => {
  const [type, setType] = useState();

  useEffect(() => {
    if (type !== undefined) setSearchType(type)
  }, [type])

  const handleChange = ({ target }: any) => setType(target.value);

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="search-type-input" className="text-white">Searching for</label>
      <select
        className="cursor-pointer px-5 py-2 bg-white text-primary rounded-md text-md text focus:outline-none"
        id="search-type-input"
        value={type}
        onChange={ handleChange }
      >
        { options.map((opt, index) =>
            <option
              key={index}
              value={opt.value}
              className={`${opt.value === type ? 'bg-secondary text-white' : ''}`}
            >
              {opt.label}
            </option>
        )}
      </select>
    </div>
  )
}

export default SearchType
