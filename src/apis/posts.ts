import { useState } from 'react'
import axiosInstance from '@/utils/AxiosInstance'
import { parseParams } from '@/utils/ParamsParser'

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({})

  const getPosts = async (filters = {}) => {
    setLoading(true)
    const response = await axiosInstance.get('/posts' + parseParams(filters))
    setPosts(response.data.data)
    setPages(response.data.last_page)
    setLoading(false)
  }

  const setFilter = (key, value) => {
    if(value === null || value === '') {
      delete filters[key]
      setFilters({
        ...filters
      })
      return
    }

    setFilters({
      ...filters,
      [key]: value
    })
  }

  return {
    posts,
    setPosts,
    loading,
    setLoading,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
    getPosts,
    filters,
    setFilters,
    setFilter
  }
}