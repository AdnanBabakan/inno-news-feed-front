import '@/assets/css/global.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { GlobalContext, GlobalContextDefaultValue } from '@/contexts/GlobalContext'
import { useState } from 'react'

TimeAgo.addDefaultLocale(en)

export default function AppContainer({ Component, pageProps }): JSX.Element {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState({})

  return <GlobalContext.Provider value={{ token, setToken, user, setUser, notification, setNotification }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Component {...pageProps} />
    </LocalizationProvider>
  </GlobalContext.Provider>
}