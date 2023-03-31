import NewsSourcePropsObjectInterface from '@/components/content/newsSources/interfaces/NewsSourcePropsObjectInterface'

export default interface PostPropsObjectInterface {
  id: string,
  thumbnail: string,
  title: string,
  published_at: string,
  excerpt: string
  by: string,
  details: {
    url: string
  },
  source: NewsSourcePropsObjectInterface,
}