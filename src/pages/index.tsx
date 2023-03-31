import React, { useEffect } from 'react'
import MainLayout from '@/layouts/usable/MainLayout'
import PageTitle from '@/components/general/PageTitle'
import Post from '@/components/content/post/Post'
import { Alert, CircularProgress, Grid, IconButton, InputAdornment, Pagination, TextField } from '@mui/material'
import PostPropsObjectInterface from '@/components/content/post/interfaces/PostPropsObjectInterface'
import PostSmall from '@/components/content/post/PostSmall'
import { SearchTwoTone as SearchTwoToneIcon } from '@mui/icons-material'
import usePosts from '@/apis/posts'
import SearchBar from '@/components/content/search/SearchBar'
import { parseParams } from '@/utils/ParamsParser'
import _ from 'lodash'
import FilterGroup from '@/components/content/search/FilterGroup'
import dayjs from 'dayjs'
import Publishers from '@/components/content/search/Publishers'

export default function Index(): JSX.Element {

  const { posts, loading, getPosts, pages, currentPage, setCurrentPage, filters, setFilter } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    getPosts(filters)
  }, [filters])

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    setFilter('page', value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePublisherChange = (v) => {
    setFilter('by', v.length > 0 ? v.join(',') : null)
  }

  const handleQueryChange = _.debounce((e) => {
    setFilter('q', e.target.value)
  }, 500)

  const handleAfterChange = (date: Date | null) => {
    setFilter('after', dayjs(date).format('YYYY-MM-DD'))
  }

  const handleBeforeChange = (date: Date | null) => {
    setFilter('before', dayjs(date).format('YYYY-MM-DD'))
  }

  return <MainLayout>
    <FilterGroup
      onPublisherChange={handlePublisherChange}
      onQueryChange={handleQueryChange}
      onAfterChange={handleAfterChange}
      onBeforeChange={handleBeforeChange}
      className='mb-2'
    />
    <PageTitle className='font-bold mb-4'>Discover</PageTitle>
    {
      loading ? <div className='flex justify-center my-2'>
        <CircularProgress />
      </div> : (
        posts.length > 0 ? <div>
          <div className='grid gap-2 grid-cols-2'>
            {posts.map((post, index) => {
              if ([0, 1, 2].includes((index + 5) % 5)) {
                return <Post post={post} key={post.id} className='col-span-2' />
              } else {
                return <PostSmall post={post} key={post.id} className='col-span-1' />
              }
            })}
          </div>
          {
            pages > 1 ? <div className='flex justify-center mt-4'>
            <Pagination count={pages} page={currentPage} shape='rounded' onChange={handlePageChange} />
            </div> : <></>
          }
        </div> : <Alert severity='info'>No results found.</Alert>
      )
    }
  </MainLayout>
}