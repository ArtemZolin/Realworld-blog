/* eslint-disable prettier/prettier */
import React from 'react'
import { Pagination as AntdPagination } from 'antd'
import './Pagination.scss'
import { useDispatch, useSelector } from 'react-redux'

import { changePageNumber } from '../../store/articlesSlice'

export default function Pagination() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.pageNumber)
  const onChangePage = (pageNumber) => {
    dispatch(changePageNumber(pageNumber))
  }
  return (
    <div className="article-pagination">
      <AntdPagination 
        defaultCurrent={page} 
        pageSize={5}
        total={500} 
        onChange={onChangePage} />
    </div>
  )
}
