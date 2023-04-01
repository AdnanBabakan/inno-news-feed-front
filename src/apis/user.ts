import { useContext, useState } from 'react'
import axiosInstance from '@/utils/AxiosInstance'
import * as yup from 'yup'
import { GlobalContext } from '@/contexts/GlobalContext'

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
  const global = useContext(GlobalContext)

  const setToken = (token) => {
    axiosInstance.defaults.headers.common = {
      'Authorization': 'Bearer ' + token
    }
    setUser()
  }

  const setUser = async () => {
    try {
      const response = await axiosInstance.get('/x-user')
      global.setUser(response.data)
    } catch(e) {
      global.setToken(null)
    }
  }

  return {
    setToken
  }
}