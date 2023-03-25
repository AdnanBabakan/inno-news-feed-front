import React from 'react'
import classNames from 'classnames'

import { IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { AccountCircleTwoTone as AccountCircleTwoToneIcon } from '@mui/icons-material'

export default function Navbar(props: React.PropsWithChildren): JSX.Element {
  const { className } = props

  return <div className={classNames(['flex items-center p-2', className])}>
    <IconButton color='black' aria-label='Menu'>
      <MenuIcon />
    </IconButton>
    <div className='font-bold mr-1'>INR</div>
    <div className='text-xs text-gray-400'>| <span className='italic'>Inno News Reader</span></div>
    <div className='flex-grow' />
    <IconButton aria-label='account' size='large'>
      <AccountCircleTwoToneIcon fontSize='large'/>
    </IconButton>
  </div>
}