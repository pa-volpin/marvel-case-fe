import React, { ReactElement } from 'react'
import SelectNumberOfElements from './SelectNumberOfElements'
import Label from './Label'

interface props {
  limit?: number
  total?: number
  page?: number
  minToShow?: number
  maxToShow?: number
  setLimit: CallableFunction
}

const FooterRightContent: React.FC<props> = ({
  total = 0,
  page = 0,
  limit = 0,
  setLimit,
  minToShow = 0,
  maxToShow
}: props): ReactElement => {

  return (
    <div className="flex items-center space-x-6">
      <SelectNumberOfElements
        total={total}
        limit={limit}
        setLimit={setLimit}
        minToShow={minToShow}
        maxToShow={maxToShow}
      />
      <Label total={total} page={page} limit={limit} />
    </div>
  )
}

export default FooterRightContent
