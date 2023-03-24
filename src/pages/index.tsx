import React from 'react'
import MainLayout from '@/layouts/usable/MainLayout'
import PageTitle from '@/components/general/PageTitle'

export default function Index(): JSX.Element {
  return <MainLayout>
    <PageTitle className="font-bold">Discover</PageTitle>
  </MainLayout>
}