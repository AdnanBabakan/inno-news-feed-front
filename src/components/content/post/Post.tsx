import React from 'react'
import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'

import { excerpt } from '@/utils/StringUtils'
import Image from 'next/image'
import classNames from 'classnames'
import NewsSourceSmall from '@/components/content/newsSources/NewsSourceSmall'
import PostPropsInterface from '@/components/content/post/interfaces/PostPropsInterface'
import Link from 'next/link'

export default function Post(props: PostPropsInterface): JSX.Element {
  const { post, className } = props

  return <div className={classNames(['w-full flex flex-col', className])}>
    <div className='text-xs text-gray-300'>
      {post.date}
    </div>
    <Link href={'/post/' + post.id} className='font-serif font-bold text-2xl leading-relaxed'>
      {excerpt(post.title, 50)}
    </Link>
    <NewsSourceSmall source={post.source} className='mt-1 mb-3' />
    <Link href={'/post/' + post.id}>
      <Image src={post.image} alt={post.title} width={2000} height={2000} className='w-full h-full object-cover' />
    </Link>
    <div className='text-xs text-gray-400 mt-2'>
      {post.readingTime.toLocaleUpperCase()}
    </div>
    <div className='font-serif leading-relaxed text-gray-800 text-sm mt-2'>
      {excerpt(post.excerpt, 150)}
    </div>
    <div className='flex-grow' />
    <Divider className='mt-3' />
  </div>
}