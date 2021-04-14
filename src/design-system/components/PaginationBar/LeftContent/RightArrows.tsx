import React from 'react'
import { FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa';

interface props {
  limit: number
  total: number
  page: number
  setPage: CallableFunction
}

const RightArrows: React.FC<props> = ({ total, page, limit, setPage }: props) => {
  const numberOfPages = Math.ceil(total / limit)

  return (
    <div className="flex items-center">
      <FaAngleRight
        className={`${page >= numberOfPages ? 'cursor-default bg-gray-500' : 'cursor-pointer hover:bg-secondary'} w-8 h-8 mx-1 focus:outline-none rounded-md`}
        onClick={() => !(page >= numberOfPages) && setPage(page + 1)}
      />
      <FaAngleDoubleRight
        className={`${page >= numberOfPages ? 'cursor-default bg-gray-500' : 'cursor-pointer hover:bg-secondary'} w-8 h-8 mx-1 focus:outline-none rounded-md`}
        onClick={() => !(page >= numberOfPages) && setPage(numberOfPages)}
      />
    </div>
  )
}

export default RightArrows
