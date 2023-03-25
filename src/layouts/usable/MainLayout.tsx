import React from 'react'
import DefaultLayout from '@/layouts/DefaultLayout'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function MainLayout(props: React.PropsWithChildren): JSX.Element {
  const { children } = props

  return <DefaultLayout>
    <Navbar />
    <div className='px-4 mt-16'>
      {children}
    </div>
    <Footer />
  </DefaultLayout>
}