import { Empty } from 'antd'
import useSWR from 'swr'
import { BookCard } from '../components/BookCard'
import { Error } from '../components/Error'
import { PreLoader } from '../components/PreLoader'
import { NEW_BOOKS_API } from '../constants'
import { AppCarousel } from './AppCarousel'

export const BooksPage = () => {
  // useSWR 是一个用于网络请求的库
  // 它只会在页面初次渲染时执行
  const { data, error, isLoading } = useSWR(NEW_BOOKS_API, async (...args) => {
    const res = await fetch(...args)
    return res.json()
  })

  // 如果请求数据发生错误，显示错误信息
  if (error) return <Error message='数据加载失败，请检查网络是否连接!' />
  // 请求时显示加载信息
  if (isLoading) return <PreLoader />
  // 如果请求不到数据，显示数据为空
  if (!data) return <Empty className='empty' />

  return (
    <>
      <div className='books-page'>
        {data['books'].map((item) => (
          <BookCard
            book={item}
            key={item.isbn13}
          />
        ))}
      </div>
    </>
  )
}
