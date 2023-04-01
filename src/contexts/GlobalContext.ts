import { createContext, useState } from 'react'

interface GlobalContextType {
  token: string | null,
  setToken: (token: string | null) => void,
  user: object | null,
  setUser: (user: object | null) => void,
  notification: object | null,
  setNotification: (notifications: object | null) => void
}

export const GlobalContextDefaultValue : GlobalContextType = {
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  notification: null,
  setNotification: () => {}
}

export const GlobalContext = createContext<GlobalContextType>(GlobalContextDefaultValue)