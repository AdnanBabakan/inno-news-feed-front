import { createContext } from 'react'

interface UserContextType {
  token: string | null,
  data: object | null,
}

export const UserContextDefaultValue : UserContextType = {
  token: null,
  data: null,
}

export const UserContext = createContext<UserContextType>({
  token: null,
  data: null,
})