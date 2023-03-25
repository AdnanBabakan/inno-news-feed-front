import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import { FavoriteTwoTone as FavoriteTwoTone } from '@mui/icons-material'

export default function Footer(props: React.ComponentProps<any>): JSX.Element {
  const { className } = props

  return <div className={classNames('text-center text-xs text-gray-400 px-2 py-2', className)}>
    <div className='mb-2'>
      <Link href='/'>Terms of Service</Link>
      &nbsp;| <Link href='/'>Privacy Policy</Link>
      &nbsp;| <Link href='/'>Cookies Policy</Link>
    </div>
    <div className='italic'>
      All rights reserved &copy; 2023
    </div>
    <div>
      Designed with <FavoriteTwoTone fontSize='xsmall' /> by <Link href='https://adnanbabakan.js.org' target='_blank'>Adnan Babakan</Link>
    </div>
  </div>
}