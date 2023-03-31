import React from 'react'
import { Button, TextField } from '@mui/material'

export default function SignUpForm(props: React.ComponentProps<any>): JSX.Element {
  const { className } = props

  return <div className={className}>
    <p className='text-gray-400 text-sm mb-2'>In order to sign up please fill the credentials below:</p>
    <TextField label='First name' className='w-full mb-2' />
    <TextField label='Last name' className='w-full mb-2' />
    <TextField label='Email' className='w-full mb-2' />
    <TextField label='Password' type='password' className='w-full mb-2' />
    <Button variant='outlined' color='primary' className='w-full'>Sign up</Button>
  </div>
}