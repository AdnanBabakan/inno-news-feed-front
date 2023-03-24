import React from 'react'
import DefaultLayout from '@/layouts/DefaultLayout'
import Navbar from '@/components/navbar/Navbar'

export default function MainLayout(props: React.PropsWithChildren): JSX.Element {
  const { children } = props

  return <DefaultLayout>
    <Navbar />
    {children}
  </DefaultLayout>
}