import { useContext } from 'react'
import { GlobalContext } from '@/contexts/GlobalContext'
import { Alert, Snackbar } from '@mui/material'

export default function Notifications() {
  const global = useContext(GlobalContext)

  return <>
    {
      global.notification.hasOwnProperty('message') ?
        <Snackbar
          open={global.notification.hasOwnProperty('message')}
          autoHideDuration={global.notification.timeOut}
          onClose={() => {
            global.setNotification({})
          }}
        >
          <Alert severity={global.notification.severity} className='w-full'>
            {global.notification.message}
          </Alert>
        </Snackbar> : <></>
    }
  </>
}