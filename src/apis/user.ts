import { useContext, useState } from 'react'
import axiosInstance from '@/utils/AxiosInstance'
import * as yup from 'yup'
import { GlobalContext } from '@/contexts/GlobalContext'
import Cookies from 'js-cookie'
import useNotifications from '@/apis/notifications'
import usePosts from '@/apis/posts'
import { parseParams } from '@/utils/ParamsParser'

export function useLogin() {
  const [loading, setLoading] = useState(false)

  const handleLoginSubmit = async ({ email, password }) => {
    setLoading(true)
    const response = await axiosInstance.post('/user/authenticate', {
      email,
      password,
    })
    setLoading(false)
    return response
  }

  const validations = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  return {
    loading,
    handleLoginSubmit,
    validations
  }
}

export function useSignUp() {
  const [loading, setLoading] = useState(false)

  const handleSignUpSubmit = async ({ firstName, lastName, email, password }) => {
    setLoading(true)
    const response = await axiosInstance.post('/user/register', {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    })
    setLoading(false)
    return response
  }

  const validations = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  return {
    loading,
    handleSignUpSubmit,
    validations
  }
}

export function useUser() {
  const [feed, setFeed] = useState({
    by: ''
  })
  const [feedPosats, setFeedPosts] = useState([])

  const global = useContext(GlobalContext)

  const { posts, setPosts, loading, setLoading, pages, setPages, currentPage, setCurrentPage, getPosts, filters, setFilters, setFilter } = usePosts()

  const notifications = useNotifications()

  const setTokenFromCookie = () => {
    const token = Cookies.get('token')
    console.log(token)
    if (token) {
      setToken(token)
    }
  }

  const setToken = async (token) => {
    global.setToken(token)
    Cookies.set('token', token)
    axiosInstance.defaults.headers.common = {
      'Authorization': 'Bearer ' + token
    }
    await setUser()
  }

  const setUser = async () => {
    try {
      const response = await axiosInstance.get('/x-user')
      global.setUser(response.data)
    } catch(e) {
      global.setToken(null)
      Cookies.remove('token')
    }
  }

  const getFeed = async () => {
    try {
      const response = await axiosInstance.get('/feed')
      setFeed(response.data.settings)
    } catch(e) {
      notifications.sendNotification('Error fetching feed settings.', 'error')
    }
  }

  const getFeedPosts = async (filters = {}) => {
    setLoading(true)
    try {
      const response = await axiosInstance.get('/feed/posts' + parseParams(filters))
      setPosts(response.data.data)
      setPages(response.data.last_page)
    } catch(e) {
      notifications.sendNotification('Error fetching feed posts.', 'error')
    }
    setLoading(false)
  }

  const saveFeedBy = async (by) => {
    try {
      const response = await axiosInstance.put('/feed', {
        settings: {
          by
        }
      })
      setFeed({
        by
      })
    } catch(e) {
      notifications.sendNotification('Error saving feed settings.', 'error')
    }
  }

  const logout = async () => {
    const response = await axiosInstance.post('/x-user/logout')
    global.setToken(null)
    Cookies.remove('token')
    global.setUser(null)
    notifications.sendNotification('Logged out successfully.', 'success')
  }

  return {
    setTokenFromCookie,
    setToken,
    getFeed,
    setFeed,
    feed,
    getFeedPosts,
    posts,
    pages,
    loading,
    currentPage,
    filters,
    setFilter,
    setCurrentPage,
    saveFeedBy,
    logout
  }
}