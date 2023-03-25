import NewsSourcePropsObjectInterface from '@/components/content/newsSources/interfaces/NewsSourcePropsObjectInterface'

export default interface PostPropsObjectInterface {
  id: string,
  image: string,
  title: string,
  date: string,
  excerpt: string
  readingTime: string,
  source: NewsSourcePropsObjectInterface,
}