import React, { useEffect } from 'react'
import DefaultLayout from '@/layouts/DefaultLayout'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Notifications from '@/components/general/Notifications'
import { useUser } from '@/apis/user'

export default function MainLayout(props: React.PropsWithChildren): JSX.Element {
  const { children } = props

  const user = useUser()

  useEffect(() => {
    user.setTokenFromCookie()
  }, [])

  return <DefaultLayout>
    <Navbar />
    <div className='px-4 mt-16'>
      {children}
    </div>
    <Footer />
    <Notifications />
  </DefaultLayout>
}