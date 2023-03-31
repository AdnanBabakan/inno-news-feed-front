import React from 'react'
import classNames from 'classnames'

import { Button, IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { AccountCircleTwoTone as AccountCircleTwoToneIcon } from '@mui/icons-material'
import useScrollHeight from '@/components/misc/ScrollHeight'

export default function Navbar(props: React.PropsWithChildren): JSX.Element {
  const { className } = props

  const { scrollHeight } = useScrollHeight()

  return <div
    className={classNames([
      'flex items-center fixed top-0 right-0 left-0 z-20 bg-white px-2 py-1',
      { 'shadow-xl': scrollHeight > 100 },
      className,
    ])}
  >
    <IconButton color='black' aria-label='Menu' className='mr-1'>
      <MenuIcon />
    </IconButton>
    <div className='font-bold mr-1'>INR</div>
    <div className='text-xs text-gray-400'>| <span className='italic'>Inno News Reader</span></div>
    <div className='flex-grow' />
    <Button aria-label='account' startIcon={<AccountCircleTwoToneIcon />} variant='outlined' size='small'>
      Sign in
    </Button>
  </div>
}