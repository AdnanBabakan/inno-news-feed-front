import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '@/layouts/usable/MainLayout'
import PageTitle from '@/components/general/PageTitle'
import Post from '@/components/content/post/Post'
import {
  Alert,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Pagination,
} from '@mui/material'
import PostSmall from '@/components/content/post/PostSmall'
import usePosts from '@/apis/posts'
import _ from 'lodash'
import FilterGroup from '@/components/content/search/FilterGroup'
import dayjs from 'dayjs'
import { TuneTwoTone as TuneTwoToneIcon, CloseTwoTone as CloseTwoToneIcon } from '@mui/icons-material'
import { GlobalContext } from '@/contexts/GlobalContext'

export default function Index(): JSX.Element {
  const [filtersDialogOpen, setFiltersDialogOpen] = useState(false)

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

  const global = useContext(GlobalContext)

  return <MainLayout>
    <div className='flex justify-between items-center'>
      <PageTitle className='font-bold mb-4'>Discover</PageTitle>
      <IconButton onClick={() => setFiltersDialogOpen(true)}>
        <TuneTwoToneIcon />
      </IconButton>
    </div>
    <Divider className='mb-3' />
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
          publisherValue={filters.by ? filters.by.split(',') : []}
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