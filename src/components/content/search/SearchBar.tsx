import { IconButton, InputAdornment, TextField } from '@mui/material'
import { SearchTwoTone as SearchTwoToneIcon } from '@mui/icons-material'
import React from 'react'

export default function SearchBar(props: React.ComponentProps<any>): JSX.Element {
  const { defaultValue, onChange, className } = props

  return <TextField
    placeholder='Search by title, publisher, keywords...'
    fullWidth
    className={className}
    defaultValue={defaultValue}
    InputProps={{
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton edge='end' size='small'>
            <SearchTwoToneIcon fontSize='small' />
          </IconButton>
        </InputAdornment>
      ),
    }}
    onChange={onChange}
  />
}