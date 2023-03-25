import React from 'react'
import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'

import { excerpt } from '@/utils/StringUtils'
import Image from 'next/image'
import classNames from 'classnames'
import { PostPropsInterface } from '@/components/content/post/interfaces/PostPropsInterface'
import NewsSourceSmall from '@/components/content/newsSources/NewsSourceSmall'

export default function Post(props: PostPropsInterface): JSX.Element {
  const { post, className } = props

  return <div className={classNames(['w-full flex flex-col', className])}>
    <div className='text-xs text-gray-300'>
      {post.date}
    </div>
    <div className='font-serif font-bold text-2xl leading-relaxed'>
      {excerpt(post.title, 50)}
    </div>
    <NewsSourceSmall source={post.source} className='mt-1 mb-3' />
    <Image src={post.image} alt={post.title} width={2000} height={2000} className='w-full' />
    <div className='text-sm text-gray-400 mt-2'>
      {post.readingTime.toLocaleUpperCase()}
    </div>
    <div className='pt-3'>
      <div className='font-serif leading-relaxed text-gray-800 text-sm'>
        {excerpt(post.excerpt, 150)}
      </div>
    </div>
    <div className='flex justify-end mt-3'>
      <Button variant='text' size='small'>Continue Reading...</Button>
    </div>
    <Divider className='mt-3' />
  </div>
}