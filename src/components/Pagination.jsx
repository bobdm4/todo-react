import React from 'react'
import { usePagination } from './../hooks/usePagination';

export const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = usePagination(totalPages)
  return (
    <div className='pageWrp'>
      {pagesArray.map(p => (
        <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page__current' : 'page'}>
          {p}
        </span>
      ))}
    </div>
  )
}
