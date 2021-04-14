import React, { ReactElement } from 'react'

interface props {
  limit: number
  total: number
  minToShow: number
  maxToShow?: number
  setLimit: CallableFunction
}

const SelectNumberOfElements: React.FC<props> = ({ total, limit, setLimit, minToShow, maxToShow }: props): ReactElement => {
  const numberOfShowOptions: number = Math.ceil(total / minToShow)
  const showOptions: number[] = []
  for (let i = 1; i <= numberOfShowOptions; i += 1) {
    const numberOfCards = i * minToShow;
    if (maxToShow && numberOfCards <= maxToShow) showOptions.push(numberOfCards);
  }

  const handleTableSettings = ({ target }: any) =>
    setLimit(target.value)

  return (
    <select
      className="cursor-pointer px-5 py-2 bg-white text-primary rounded-md text-md text focus:outline-none"
        value={limit}
        onChange={ handleTableSettings }
      >
        { showOptions.map((numOpt) =>
            <option
              key={numOpt}
              value={numOpt}
              className={`${numOpt === limit ? 'bg-secondary text-white' : ''}`}
            >
              {numOpt}
            </option>
        )}
      </select>
  )
}

export default SelectNumberOfElements
