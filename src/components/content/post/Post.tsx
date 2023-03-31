import React from 'react'
import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'

import { excerpt } from '@/utils/StringUtils'
import Image from 'next/image'
import classNames from 'classnames'
import NewsSourceSmall from '@/components/content/newsSources/NewsSourceSmall'
import PostPropsInterface from '@/components/content/post/interfaces/PostPropsInterface'
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'

export default function Post(props: PostPropsInterface): JSX.Element {
  const { post, className } = props

  return <div className={classNames(['w-full flex flex-col', className])}>
    <div className='text-xs text-gray-300'>
      <ReactTimeAgo date={new Date(post.published_at)} />
    </div>
    <a href={post.details.url} target='_blank' className='font-serif font-bold text-2xl leading-relaxed'>
      {excerpt(post.title, 50)}
    </a>
    <NewsSourceSmall by={post.by} className='mt-1 mb-3' />
    <a href={post.details.url} target='_blank'>
      <Image src={post.thumbnail} alt={post.title} width={2000} height={2000} className='w-full h-full object-cover' />
    </a>
    <div className='font-serif leading-relaxed text-gray-800 text-sm mt-2'>
      {excerpt(post.excerpt, 150)}
    </div>
    <div className='flex-grow' />
    <Divider className='mt-3' />
  </div>
}