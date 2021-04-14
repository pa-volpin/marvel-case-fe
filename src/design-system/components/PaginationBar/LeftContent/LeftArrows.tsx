import React from 'react'
import { FaAngleDoubleLeft, FaAngleLeft } from 'react-icons/fa';

interface props {
  page: number
  setPage: CallableFunction
}

const LeftArrows: React.FC<props> = ({ page, setPage }: props) => {
  return (
    <div className="flex items-center">
      <FaAngleDoubleLeft
        className={`${page <= 1 ? 'cursor-default bg-gray-500' : 'cursor-pointer hover:bg-secondary'} w-8 h-8 mx-1 focus:outline-none rounded-md`}
        onClick={() => !(page <= 1) && setPage(1)}
      />
      <FaAngleLeft
      className={`${page <= 1 ? 'cursor-default bg-gray-500' : 'cursor-pointer hover:bg-secondary'} w-8 h-8 mx-1 focus:outline-none rounded-md`}
      onClick={() => !(page <= 1) && setPage(page - 1)}
      />
    </div>
  )
}

export default LeftArrows;
