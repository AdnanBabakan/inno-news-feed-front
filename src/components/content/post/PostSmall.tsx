import React from 'react'
import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'

import { excerpt } from '@/utils/StringUtils'
import Image from 'next/image'
import classNames from 'classnames'
import NewsSourceSmall from '@/components/content/newsSources/NewsSourceSmall'
import PostPropsInterface from '@/components/content/post/interfaces/PostPropsInterface'
import NewsSourceXSmall from '@/components/content/newsSources/NewsSourceXSmall'
import Link from 'next/link'

export default function PostSmall(props: PostPropsInterface): JSX.Element {
  const { post, className } = props

  return <Link href={'/post/' + post.id} className={classNames(['w-full h-full flex flex-col', className])}>
    <div className='text-xs text-gray-300'>
      {post.date}
    </div>
    <div className='font-serif font-bold text-sm leading-relaxed'>
      {excerpt(post.title, 40)}
    </div>
    <NewsSourceXSmall source={post.source} className='mt-1 mb-3' />
    <Image src={post.image} alt={post.title} width={2000} height={2000} className='w-full h-full object-cover' />
    <div className='text-xs text-gray-400 mt-2'>
      {post.readingTime.toLocaleUpperCase()}
    </div>
    <div className='font-serif leading-relaxed text-gray-800 text-sm mt-2'>
      {excerpt(post.excerpt, 50)}
    </div>
    <div className='flex-grow' />
    <Divider className='mt-3' />
  </Link>
}