import React from 'react'
import { Alert, CircularProgress, Pagination } from '@mui/material'
import Post from '@/components/content/post/Post'
import PostSmall from '@/components/content/post/PostSmall'
import classNames from 'classnames'

export default function PostsGrid(props: React.ComponentProps<any>) : JSX.Element {
  const { posts, className } = props
  
  return <div className={classNames('grid gap-2 grid-cols-4', className)}>
    {posts.map((post, index) => {
      if ([0, 1].includes((index + 6) % 6)) {
        return <Post post={post} key={post.id} className='col-span-4 md:col-span-2' />
      } else {
        return <PostSmall post={post} key={post.id} className='col-span-2 md:col-span-1' />
      }
    })}
  </div>
}