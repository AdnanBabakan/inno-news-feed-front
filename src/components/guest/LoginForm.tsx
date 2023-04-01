import React from 'react'
import { Button, TextField } from '@mui/material'
import useLogin from '@/apis/user'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useNotifications from '@/apis/notifications'
import { humanReadableMessage } from '@/utils/MessageUtils'

export default function LoginForm(props: React.ComponentProps<any>): JSX.Element {
  const { className } = props

  const { loading, handleLoginSubmit, validations } = useLogin()

  const { sendNotification } = useNotifications()

  const submitLogin = (data) => {
    handleLoginSubmit(data)
      .then(({ data }) => {
        sendNotification(data.token, 'error')
      })
      .catch(({ response }) => {
        sendNotification(humanReadableMessage(response.data.message), 'error')
      })
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // @ts-ignore
  return <div className={className}>
    <p className='text-gray-400 text-sm mb-2'>In order to login please fill the credentials below:</p>
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
      onClick={handleSubmit(submitLogin)}
    >
      Login
    </Button>
  </div>
}