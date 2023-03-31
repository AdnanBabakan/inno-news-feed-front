import NewsSourcePropsInterface from '@/components/content/newsSources/interfaces/NewsSourcePropInterface'
import classNames from 'classnames'
import { Avatar } from '@mui/material'
import Link from 'next/link'

export default function NewsSourceXSmall(props: NewsSourcePropsInterface): JSX.Element {
  const { by, className } = props

  return <Link href={'/publisher/' + by} className={classNames(['flex items-center', className])}>
    <div className='font-serif text-xs text-gray-500'>
      {by}
    </div>
  </Link>
}