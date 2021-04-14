import React, { ReactElement } from 'react'

interface props {
  limit: number
  total: number
  page: number
}

const Label: React.FC<props> = ({ total, page, limit }: props): ReactElement => {

  const lowerLimit = (page - 1) * limit + 1
  const t = page * limit
  const upperLimit = (t < total) ? t : total

  return (
    <div className="text-white text-lg flex space-x-2 items-center">
      <p>Showing</p>
      <p className="font-bold">
        {`${lowerLimit} - ${upperLimit}`}
      </p>
      <p>of</p>
      <p className="font-bold">
        {total}
      </p>
    </div>
  )
}

export default Label
