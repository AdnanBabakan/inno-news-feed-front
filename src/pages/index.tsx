import React, { useEffect } from 'react'
import MainLayout from '@/layouts/usable/MainLayout'
import PageTitle from '@/components/general/PageTitle'
import Post from '@/components/content/post/Post'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import PostPropsObjectInterface from '@/components/content/post/interfaces/PostPropsObjectInterface'
import PostSmall from '@/components/content/post/PostSmall'
import { SearchTwoTone as SearchTwoToneIcon } from '@mui/icons-material'
import usePosts from '@/apis/posts'
import SearchBar from '@/components/content/search/SearchBar'

const testPosts: PostPropsObjectInterface[] = [
  {
    id: '3257776576',
    image: 'https://static01.nyt.com/images/2023/03/26/multimedia/23Wittine-01-chbz-print1/23Wittine-01-chbz-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale',
    title: 'Greg Wittine, Once a Hero for Disabled Boy Scouts, Dies at 67',
    date: '30 minutes ago',
    excerpt: 'As a young man with cerebral palsy, he gained notice for his quest to be an Eagle Scout. But his name had been mostly lost to popular memory.',
    source: {
      id: '233554',
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
      id: '212124444',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png',
      name: 'CNN',
    },
    readingTime: '20 minutes read',
  },
  {
    id: '1223255656111',
    image: 'https://image.cnbcfm.com/api/v1/image/105343415-1532101496379gettyimages-975924044.jpeg?v=1679671383&w=740&h=416&ffmt=webp&vtcrop=y',
    title: 'BANKS Deutsche Bank is not the next Credit Suisse, analysts say as panic spreads',
    date: 'Yesterday',
    excerpt: 'Deutsche Bank shares slid Friday while the cost of insuring against its default spiked, as the German lender was engulfed by market panic about the stability of the European banking sector.',
    source: {
      id: '8998766453',
      image: 'https://play-lh.googleusercontent.com/UFseqpgRgK38lavCq46JkCidIMkdaXsKi6II4nBwyIggaeiAiWWT8QgEEzxZDVuWMZM',
      name: 'CNBC',
    },
    readingTime: '2 minutes read',
  },
  {
    id: '889977785522',
    image: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/wb5j4dkln8rmoigv_1679668333.jpeg',
    title: 'France Vs Netherlands Live Streaming: How To Watch UEFA Euro Qualifiers In IND, UK And US',
    date: '3 days ago',
    excerpt: 'UEFA Euro qualifiers live streaming: France will host the Netherlands in a UEFA Euro Qualifier on Saturday at the Stade de France. Les Bleus have been on a rampant run on the international stage and the Dutch will have a tough task ahead of them. The match will start at 1:15 AM IST on Saturday.',
    source: {
      id: '88765556',
      image: 'https://yt3.googleusercontent.com/ytc/AL5GRJVxA8uCk9E231XTg2mzr4b0-WXHknHHtuPLYG7eTA=s900-c-k-c0x00ffffff-no-rj',
      name: 'Republic World',
    },
    readingTime: '15 minutes read',
  },
  {
    id: '55669963137',
    image: 'https://m1.quebecormedia.com/emp/emp/FhLv69YUUAEzFxPd22f9110-5ca1-41a1-863e-8bfc9ede335a_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=1200&h=667&width=925',
    title: 'John Wick: Chapter 4 Ending, Explained',
    date: '18th of March',
    excerpt: 'In modern blockbuster culture, it is very rare to see a fourth entry in a franchise remain engaging and beloved. Sure enough, John Wick: Chapter 4 delivers on all the promise it\'s built up over a trilogy of excellent action films. The film\'s ending may come as a shock, but there\'s still a lot of life in this franchise.',
    source: {
      id: '7788995',
      image: 'https://pbs.twimg.com/profile_images/1288445622542929923/05FNH9O5_400x400.png',
      name: 'Game Rant',
    },
    readingTime: '12 minutes read',
  },
  {
    id: '1558875369251',
    image: 'https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2022/6/stock/220630-sign_rdax_775x440s.jpg',
    title: 'Allies take further steps to establish NATO Innovation Fund',
    date: '14th of March',
    excerpt: 'At the 2022 Madrid Summit, 22 Allies launched the NATO Innovation Fund, the world’s first multi-sovereign venture capital fund. Since then, significant steps have been made to fully establish the Fund by NATO’s Vilnius Summit in July 2023.',
    source: {
      id: '15888520',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/800px-Flag_of_NATO.svg.png',
      name: 'NATO',
    },
    readingTime: '12 minutes read',
  },
  {
    id: '888999955541',
    image: 'https://media.npr.org/assets/img/2023/03/24/ap23083403980259_wide-0ebaef230202a35fc344e609460799d712e96fe2-s800-c85.webp',
    title: 'King Charles III postpones a trip to France as strikes and protest hobble the country',
    date: '12th of March',
    excerpt: 'PARIS — French citizens angry at President Emmanuel Macron\'s pension reforms engaged in scattered protest actions Friday, as the ongoing unrest across the country persuaded officials to postpone a planned state visit by Britain\'s King Charles III.',
    source: {
      id: '9575328146',
      image: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072011/npr_logo.gif?itok=iS8UKEGU',
      name: 'npr',
    },
    readingTime: '4 minutes read',
  },
  {
    id: '8955512733210',
    image: 'https://static.euronews.com/articles/stories/07/48/37/46/773x435_cmsv2_77e52463-b15f-5310-80db-96a5b551ec24-7483746.jpg',
    title: 'Bordeaux town hall set ablaze as French pension reform unrest grows',
    date: '7th of March',
    excerpt: 'Unrest over pension reform in France grew on Thursday, with Bordeaux town hall set ablaze. More than a million protesters took to the streets across France, amid renewed violence and tension. ',
    source: {
      id: '8526931470',
      image: 'https://yt3.googleusercontent.com/HTOTZi2U8zk4wk6MqJa07U5PpZ_G8wKOMYI49rlaxUUPVGWEfOK-FXFnPU6t2Eiowfz-F1Tm4Q=s900-c-k-c0x00ffffff-no-rj',
      name: 'euronews',
    },
    readingTime: '8 minutes read',
  },
  {
    id: '7752824563',
    image: 'https://image.cnbcfm.com/api/v1/image/105343415-1532101496379gettyimages-975924044.jpeg?v=1679671383&w=740&h=416&ffmt=webp&vtcrop=y',
    title: 'BANKS Deutsche Bank is not the next Credit Suisse, analysts say as panic spreads',
    date: 'Yesterday',
    excerpt: 'Deutsche Bank shares slid Friday while the cost of insuring against its default spiked, as the German lender was engulfed by market panic about the stability of the European banking sector.',
    source: {
      id: '8998766453',
      image: 'https://play-lh.googleusercontent.com/UFseqpgRgK38lavCq46JkCidIMkdaXsKi6II4nBwyIggaeiAiWWT8QgEEzxZDVuWMZM',
      name: 'CNBC',
    },
    readingTime: '2 minutes read',
  },
  {
    id: '1526333879',
    image: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/wb5j4dkln8rmoigv_1679668333.jpeg',
    title: 'France Vs Netherlands Live Streaming: How To Watch UEFA Euro Qualifiers In IND, UK And US',
    date: '3 days ago',
    excerpt: 'UEFA Euro qualifiers live streaming: France will host the Netherlands in a UEFA Euro Qualifier on Saturday at the Stade de France. Les Bleus have been on a rampant run on the international stage and the Dutch will have a tough task ahead of them. The match will start at 1:15 AM IST on Saturday.',
    source: {
      id: '88765556',
      image: 'https://yt3.googleusercontent.com/ytc/AL5GRJVxA8uCk9E231XTg2mzr4b0-WXHknHHtuPLYG7eTA=s900-c-k-c0x00ffffff-no-rj',
      name: 'Republic World',
    },
    readingTime: '15 minutes read',
  },
]

export default function Index(): JSX.Element {

  const { posts, isLoading, getPosts } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

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
  </MainLayout>
}