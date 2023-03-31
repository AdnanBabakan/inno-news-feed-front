import { useState } from 'react'
import axiosInstance from '@/utils/AxiosInstance'
import * as yup from 'yup'

export default function useLogin() {
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