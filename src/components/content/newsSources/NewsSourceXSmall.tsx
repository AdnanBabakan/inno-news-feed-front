import NewsSourcePropsInterface from '@/components/content/newsSources/interfaces/NewsSourcePropInterface'
import classNames from 'classnames'
import { Avatar } from '@mui/material'
import Link from 'next/link'

export default function NewsSourceXSmall(props: NewsSourcePropsInterface): JSX.Element {
  const { source, className } = props

  return <Link href={'/publisher/' + source.id} className={classNames(['text-xs', className])}>
    <span className='italic text-gray-400'>From</span> <span className='font-serif text-gray-500'>{source.name}</span>
  </Link>
}