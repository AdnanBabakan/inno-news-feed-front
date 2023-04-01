import { useContext } from 'react'
import { GlobalContext } from '@/contexts/GlobalContext'

export default function useNotifications() {
  const global = useContext(GlobalContext)

  const sendNotification = (message: string, severity = 'info', timeOut = 5000) => {
    global.setNotification({ message, severity, timeOut })
  }

  return {
    sendNotification
  }
}