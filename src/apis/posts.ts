import { useState } from 'react'
import axiosInstance from '@/utils/AxiosInstance'
import { parseParams } from '@/utils/ParamsParser'

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const getPosts = async (filters = {}) => {
    setLoading(true)
    const response = await axiosInstance.get('/posts' + parseParams(filters))
    setPosts(response.data.data)
    setPages(response.data.last_page)
    setLoading(false)
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
    getPosts
  }
}