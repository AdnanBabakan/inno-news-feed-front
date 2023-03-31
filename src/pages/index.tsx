import React, { useEffect } from 'react'
import MainLayout from '@/layouts/usable/MainLayout'
import PageTitle from '@/components/general/PageTitle'
import Post from '@/components/content/post/Post'
import { Grid, IconButton, InputAdornment, Pagination, TextField } from '@mui/material'
import PostPropsObjectInterface from '@/components/content/post/interfaces/PostPropsObjectInterface'
import PostSmall from '@/components/content/post/PostSmall'
import { SearchTwoTone as SearchTwoToneIcon } from '@mui/icons-material'
import usePosts from '@/apis/posts'
import SearchBar from '@/components/content/search/SearchBar'
import { parseParams } from '@/utils/ParamsParser'

export default function Index(): JSX.Element {

  const { posts, isLoading, getPosts, pages, currentPage, setCurrentPage } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    getPosts({ page: value })
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return <MainLayout>
    <SearchBar />
    <PageTitle className='font-bold mb-4'>Discover</PageTitle>
    <div className='grid gap-2 grid-cols-2'>
      {posts.map((post, index) => {
        if ([0, 1, 2].includes((index + 5) % 5)) {
          return <Post post={post} key={post.id} className='col-span-2' />
        } else {
          return <PostSmall post={post} key={post.id} className='col-span-1' />
        }
      })}
    </div>
    <div className='flex justify-center mt-4'>
      <Pagination count={pages} shape='rounded' onChange={handlePageChange} />
    </div>
  </MainLayout>
}