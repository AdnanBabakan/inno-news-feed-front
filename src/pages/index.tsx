import React from 'react'
import MainLayout from '@/layouts/usable/MainLayout'
import PageTitle from '@/components/general/PageTitle'
import Post from '@/components/content/post/Post'
import { Grid } from '@mui/material'
import PostPropsObjectInterface from '@/components/content/post/interfaces/PostPropsObjectInterface'
import PostSmall from '@/components/content/post/PostSmall'

const testPosts: PostPropsObjectInterface[] = [
  {
    id: '3257776576',
    image: 'https://static01.nyt.com/images/2023/03/26/multimedia/23Wittine-01-chbz-print1/23Wittine-01-chbz-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale',
    title: 'Greg Wittine, Once a Hero for Disabled Boy Scouts, Dies at 67',
    date: '2 hours ago',
    excerpt: 'As a young man with cerebral palsy, he gained notice for his quest to be an Eagle Scout. But his name had been mostly lost to popular memory.',
    source: {
      id: '215634332',
      image: 'https://theme.zdassets.com/theme_assets/968999/d8a347b41db1ddee634e2d67d08798c102ef09ac.jpg',
      name: 'New Your Times',
    },
    readingTime: '5 minutes read',
  },
  {
    id: '8873127872532',
    image: 'https://static01.nyt.com/images/2023/03/24/multimedia/24dc-investigate-qtlj/24dc-investigate-qtlj-superJumbo.jpg?quality=75&auto=webp',
    title: 'Former Trump Officials Must Testify in 2020 Election Inquiry, Judge Says',
    date: '2 hours ago',
    excerpt: 'A federal judge has ruled that a number of former officials from President Donald J. Trump’s administration — including his former chief of staff, Mark Meadows — cannot invoke executive privilege to avoid testifying to a grand jury investigating Mr. Trump’s efforts to overturn the 2020 election.',
    source: {
      id: '215634332',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png',
      name: 'CNN',
    },
    readingTime: '20 minutes read',
  },
]

export default function Index(): JSX.Element {
  return <MainLayout>
    <PageTitle className='font-bold mb-4'>Discover</PageTitle>
    <div className='grid gap-2 grid-cols-2 mb-2'>
      {testPosts.map(post => <PostSmall post={post} key={post.id} />)}
    </div>
    <div className='grid gap-2 grid-cols-1'>
      {testPosts.map(post => <Post post={post} key={post.id} />)}
    </div>
  </MainLayout>
}