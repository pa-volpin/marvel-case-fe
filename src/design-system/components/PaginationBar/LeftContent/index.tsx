import React from 'react'
import RightArrows from './RightArrows'
import LeftArrows from './LeftArrows'

interface props {
  limit: number
  total: number
  page: number
  setPage: CallableFunction
}

const FooterLeftContent: React.FC<props> = ({ total, page, limit, setPage }: props) => {
  const numberOfPages = Math.ceil(total / limit);
  const arrayOfIndex: Array<number> = [];

  let nLeft = 2;
  let nRight = 2;
  if ((page - 3) < 0) {
    nLeft -= Math.abs(page - 3)
    nRight += Math.abs(page - 3)
  } else if ((numberOfPages - (page + 2)) < 0) {
    nLeft += Math.abs(numberOfPages - (page + 2))
    nRight -= Math.abs(numberOfPages - (page + 2))
  }

  const lowerBoundary = (page - nLeft <= 0) ? 1 : page - nLeft
  const upperBoundary = (page + nRight > numberOfPages) ? numberOfPages : page + nRight

  for (let i = lowerBoundary; i <= upperBoundary; i += 1) {
    arrayOfIndex.push(i)
  }

  return (
    <div className="flex items-center">
      <LeftArrows page={page} setPage={setPage} />
      <div className="flex items-center">
        { arrayOfIndex.map((pageIndex, index) =>
          <button
            key={index}
            className={`focus:outline-none text-lg w-8 h-8 mx-1 ${page === pageIndex ? 'bg-secondary cursor-default' : 'bg-transparent  hover:bg-white hover:text-primary'}  rounded-md`}
            onClick={() => setPage(pageIndex)}
            disabled={ pageIndex === page }
          >
            {pageIndex}
          </button>)
        }
      </div>
      <RightArrows total={total} page={page} limit={limit} setPage={setPage} />
    </div>
  )
}

export default FooterLeftContent
