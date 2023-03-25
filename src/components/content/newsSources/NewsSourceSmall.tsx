import NewsSourcePropsInterface from '@/components/content/newsSources/interfaces/NewsSourcePropInterface'
import classNames from 'classnames'
import { Avatar } from '@mui/material'
import Link from 'next/link'

export default function NewsSourceSmall(props: NewsSourcePropsInterface): JSX.Element {
  const { source, className } = props

  return <div className={classNames(['flex items-center', className])}>
    <Avatar alt={source.name} src={source.image} sx={{ width: 25, height: 25 }} className='outline outline-1 outline-gray-300' />
    <div className='font-serif ml-2 text-sm text-gray-500'>
      {source.name}
    </div>
  </div>
}