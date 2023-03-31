import '@/assets/css/global.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { UserContext, UserContextDefaultValue } from '@/contexts/UserContext'

TimeAgo.addDefaultLocale(en)

export default function AppContainer({ Component, pageProps }): JSX.Element {
  return <UserContext.Provider value={UserContextDefaultValue}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Component {...pageProps} />
    </LocalizationProvider>
  </UserContext.Provider>
}