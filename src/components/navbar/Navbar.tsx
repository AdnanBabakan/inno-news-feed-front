import React from 'react'
import { Grid, IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

export default function Navbar(props: React.PropsWithChildren): JSX.Element {
  return <div>
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <IconButton color='black' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
      </Grid>
    </Grid>
  </div>
}