import React from 'react'
import FooterRightContent from './RightContent'
import FooterLeftContent from './LeftContent'

interface props {
  limit: number
  total: number
  page: number
  minToShow: number
  maxToShow: number
  setPage: CallableFunction
  setLimit: CallableFunction
}

const PaginationBar: React.FC<props> = ({
  total,
  page,
  limit,
  setPage,
  setLimit,
  minToShow,
  maxToShow
}: props) => {
  return (
    <div className="w-full text-white flex items-center justify-between bg-primary rounded-md p-5">
      <FooterLeftContent
        limit={limit}
        page={page}
        setPage={setPage}
        total={total}
      />
      <FooterRightContent
        limit={limit}
        setLimit={setLimit}
        page={page}
        total={total}
        minToShow={minToShow}
        maxToShow={maxToShow}
      />
    </div>
  )
}

export default PaginationBar
