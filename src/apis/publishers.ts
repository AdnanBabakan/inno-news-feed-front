import { useState } from 'react'
import axiosInstance from '@/utils/AxiosInstance'

export default function usePublishers() {
  const [publishers, setPublishers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedPublishers, setSelectedPublishers] = useState([])


  const getPublishers = async () => {
    setLoading(true)
    const response = await axiosInstance.get('/publishers')
    setPublishers(response.data)
    setLoading(false)
  }

  const selectPublisher = (publisher) => {
    if (publisher === null || selectedPublishers.includes(publisher)) return
    setSelectedPublishers([...selectedPublishers, publisher])
  }

  const removePublisher = (index) => {
    setSelectedPublishers(selectedPublishers.filter((_, i) => i !== index))
  }

  return {
    publishers,
    setPublishers,
    loading,
    setLoading,
    getPublishers,
    selectedPublishers,
    setSelectedPublishers,
    selectPublisher,
    removePublisher,
  }
}