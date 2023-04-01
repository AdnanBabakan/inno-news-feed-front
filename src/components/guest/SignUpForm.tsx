import React from 'react'
import { Button, TextField } from '@mui/material'
import { useSignUp } from '@/apis/user'
import useNotifications from '@/apis/notifications'
import { humanReadableMessage } from '@/utils/MessageUtils'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function SignUpForm(props: React.ComponentProps<any>): JSX.Element {
  const { onSuccess, onError, className } = props

  const { handleSignUpSubmit, validations } = useSignUp()

  const { sendNotification } = useNotifications()

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations),
  })

  const submitSignUp = (data) => {
    handleSignUpSubmit(data).then(() => {
      sendNotification('Sign up successful, you can sign in now.', 'success')
      onSuccess()
    }).catch(({ response }) => {
      sendNotification(humanReadableMessage(response.data.message), 'error')
      onError()
    })
  }

  // @ts-ignore
  return <div className={className}>
    <p className='text-gray-400 text-sm mb-2'>In order to sign up please fill the credentials below:</p>
    <Controller
      control={control}
      render={({ field }) => <TextField
        label='First name'
        className='w-full mb-2'
        {...field}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />}
      name='firstName'
    />
    <Controller
      control={control}
      render={({ field }) => <TextField
        label='Last name'
        className='w-full mb-2'
        {...field}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />}
      name='lastName'
    />
    <Controller
      control={control}
      render={({ field }) => <TextField
        label='Email'
        className='w-full mb-2'
        {...field}
        error={!!errors.email}
        helperText={errors.email?.message}
      />}
      name='email'
    />
    <Controller
      control={control}
      render={({ field }) => <TextField
        label='Password'
        type='password'
        className='w-full mb-2'
        {...field}
        error={!!errors.password}
        helperText={errors.password?.message}
      />}
      name='password'
    />
    <Button
      variant='outlined'
      color='primary'
      className='w-full'
      onClick={handleSubmit(submitSignUp)}
    >
      Sign up
    </Button>
  </div>
}