import NewsSourcePropsInterface from '@/components/content/newsSources/interfaces/NewsSourcePropInterface'
import classNames from 'classnames'
import { Avatar } from '@mui/material'
import Link from 'next/link'

export default function NewsSourceXSmall(props: NewsSourcePropsInterface): JSX.Element {
  const { source, className } = props

  return <Link href={'/publisher/' + source.id} className={classNames(['flex items-center', className])}>
    <Avatar alt={source.name} src={source.image} sx={{ width: 15, height: 15 }} className='outline outline-1 outline-gray-300' />
    <div className='font-serif ml-2 text-xs text-gray-500'>
      {source.name}
    </div>
  </Link>
}