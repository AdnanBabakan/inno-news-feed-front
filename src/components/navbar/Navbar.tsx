import React from 'react'
import { IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import classNames from 'classnames'

export default function Navbar(props: React.PropsWithChildren): JSX.Element {

  const classes = classNames(['p-2'])

  return <div className={classes}>
    <IconButton color='black' aria-label='Menu'>
      <MenuIcon />
    </IconButton>
  </div>
}