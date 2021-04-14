import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce';
import { FaSearch } from 'react-icons/fa'

interface props {
  setSearch: CallableFunction
}

const SearchBar: React.FC<props> = ({ setSearch }: props) => {
  const [text, setText] = useState();
  const [debounceValue] = useDebounce(text, 500);

  useEffect(() => {
    if (text !== undefined) setSearch(text)
  }, [debounceValue])

  const handleChange = ({ target }: any) => setText(target.value);

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-white" htmlFor="search-input">Searching for</label>
      <div className="flex justify-between items-center bg-white px-2 py-1 rounded-md space-x-2 overflow-hidden">
        <label htmlFor="search-input"><FaSearch /></label>
        <input
          id="search-input"
          type="text"
          value={text}
          onChange={handleChange}
          className="focus:outline-none text-primary text-lg w-full"
        />
      </div>
    </div>
  )
}

export default SearchBar

