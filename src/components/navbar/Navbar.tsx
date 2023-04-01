import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button, Dialog, DialogContent, DialogTitle, Divider } from '@mui/material'
import { AccountCircleTwoTone as AccountCircleTwoToneIcon } from '@mui/icons-material'
import useScrollHeight from '@/components/misc/ScrollHeight'
import { firstCap } from '@/utils/StringUtils'
import LoginForm from '@/components/guest/LoginForm'
import SignUpForm from '@/components/guest/SignUpForm'
import { GlobalContext } from '@/contexts/GlobalContext'

export default function Navbar(props: React.PropsWithChildren): JSX.Element {
  const { className } = props

  const [guestModelOpen, setGuestModelOpen] = useState(false)
  const [guestModalMode, setGuestModalMode] = useState<'login' | 'register'>('login')

  const toggleGuestModalMode = () => {
    setGuestModalMode(guestModalMode === 'login' ? 'register' : 'login')
  }

  const { scrollHeight } = useScrollHeight()

  return <div
    className={classNames([
      'flex items-center fixed top-0 right-0 left-0 z-20 bg-white p-3',
      { 'shadow-xl': scrollHeight > 100 },
      className,
    ])}
  >
    <div className='font-bold mr-1'>INR</div>
    <div className='text-xs text-gray-400'>| <span className='italic'>Inno News Reader</span></div>
    <div className='flex-grow' />
    <Button aria-label='account' startIcon={<AccountCircleTwoToneIcon />} variant='outlined' size='small'
            onClick={() => setGuestModelOpen(true)}>
      Sign in
    </Button>

    <Dialog open={guestModelOpen} onClose={() => setGuestModelOpen(false)}>
      <DialogTitle>{firstCap(guestModalMode)}</DialogTitle>
      <DialogContent>
        <div className='mt-2'>
          {
            guestModalMode === 'login' ? <LoginForm /> : <SignUpForm />
          }
          <Divider className='my-2'><span className='text-gray-400 text-sm'>OR</span></Divider>
          <Button className='w-full' onClick={toggleGuestModalMode}>
            { guestModalMode === 'login' ? 'Sign up' : 'Login' }
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
}