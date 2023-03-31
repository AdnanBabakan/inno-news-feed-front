import { IconButton, InputAdornment, TextField } from '@mui/material'
import { SearchTwoTone as SearchTwoToneIcon } from '@mui/icons-material'
import React from 'react'

export default function SearchBar() : JSX.Element
{
  return <TextField
    placeholder='Search by title, publisher, keywords...'
    fullWidth
    size='small'
    className='mb-4'
    InputProps={{
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton edge='end' size='small'>
            <SearchTwoToneIcon fontSize='small' />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
}