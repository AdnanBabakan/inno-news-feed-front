import React, { useEffect, useState } from 'react'
import { useUser } from '@/apis/user'
import MainLayout from '@/layouts/usable/MainLayout'
import PageTitle from '@/components/general/PageTitle'
import {
  Alert, Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Pagination,
} from '@mui/material'
import { CloseTwoTone as CloseTwoToneIcon, TuneTwoTone as TuneTwoToneIcon } from '@mui/icons-material'
import Post from '@/components/content/post/Post'
import PostSmall from '@/components/content/post/PostSmall'
import FilterGroup from '@/components/content/search/FilterGroup'
import dayjs from 'dayjs'
import _ from 'lodash'
import PostsGrid from '@/components/content/PostsGrid'
import Head from 'next/head'

export default function MyFeed(): JSX.Element {
  const [filtersDialogOpen, setFiltersDialogOpen] = useState(false)

  const {
    getFeedPosts,
    loading,
    posts,
    pages,
    currentPage,
    setCurrentPage,
    getFeed,
    feed,
    filters,
    setFilter,
    saveFeedBy,
  } = useUser()

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    setFilter('page', value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePublisherChange = (v) => {
    setFilter('by', v.length > 0 ? v.join(',') : null)
    saveFeedBy(v.length > 0 ? v.join(',') : '')
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

  useEffect(() => {
    getFeedPosts()
    getFeed()
  }, [])

  useEffect(() => {
    getFeedPosts(filters)
  }, [filters])

  return <MainLayout>
    <Head>
      <title>My Feed</title>
    </Head>
    <div className='flex justify-between items-center'>
      <PageTitle className='font-bold mb-4'>My Feed</PageTitle>
      <IconButton onClick={() => setFiltersDialogOpen(true)}>
        <TuneTwoToneIcon />
      </IconButton>
    </div>
    <div className='mb-3'>
      {feed.by.length > 0 ? feed.by.split(',').map(item => <Chip key={item.key} label={item}
                                                                 className='mr-2' />) : <></>}
    </div>
    <Divider className='mb-3' />
    {
      loading ? <div className='flex justify-center my-2'>
        <CircularProgress />
      </div> : (
        posts.length > 0 ? <div>
          <PostsGrid posts={posts} />
          {
            pages > 1 ? <div className='flex justify-center mt-4'>
              <Pagination count={pages} page={currentPage} shape='rounded' onChange={handlePageChange} />
            </div> : <></>
          }
        </div> : <Alert severity='info'>No results found.</Alert>
      )
    }
    <Dialog open={filtersDialogOpen} onClose={() => setFiltersDialogOpen(false)}>
      <DialogTitle>
        <div className='flex justify-between items-center'>
          <div>Filters</div>
          <IconButton onClick={() => setFiltersDialogOpen(false)}>
            <CloseTwoToneIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <FilterGroup
          publisherValue={feed.by ? feed.by.split(',') : []}
          queryValue={filters.q}
          afterValue={filters.after ? dayjs(filters.after) : null}
          beforeValue={filters.before ? dayjs(filters.before) : null}
          onPublisherChange={handlePublisherChange}
          onQueryChange={handleQueryChange}
          onAfterChange={handleAfterChange}
          onBeforeChange={handleBeforeChange}
          className='mt-2'
        />
      </DialogContent>
    </Dialog>
  </MainLayout>
}