import useSWR from 'swr'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Empty } from 'antd'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { PreLoader } from '../components/PreLoader'
import { QUERY_BOOK_API } from '../constants'
import { strs2Arr } from '../utils'
import { Tag } from 'antd'
import { useStore } from '../stores/useStore'

export const BookDetail = () => {
  const addToCart = useStore((state) => state.addToCart)
  const items = useStore((state) => state.items)
  const { bookId } = useParams()
  const nav = useNavigate()

  const { data, error, isLoading } = useSWR(
    `${QUERY_BOOK_API}/${bookId}`,
    async (...args) => {
      const res = await fetch(...args)
      return res.json()
    },
  )

  if (error) return <Error message='数据加载失败，请检查网络是否连接' />
  if (isLoading) return <PreLoader />
  if (!data) return <Empty />

  const book = items.find((item) => item.isbn13 === data.isbn13)

  return (
    <>
      <Button
        onClick={() => nav(-1)}
        icon={<ArrowLeftOutlined />}>
        返回
      </Button>
      <div className='book-details-box'>
        <img
          src={data.image}
          alt={data.isbn13}
        />
        <div className='details-wrap'>
          {/* 书籍名称和副标题 */}
          <h1 style={{ fontSize: '2rem' }}>{data.title}</h1>
          <h3 style={{ fontSize: '1.2rem' }}>{data.subtitle}</h3>

          {/* 书籍作者 */}
          <div className='book-authors'>
            {strs2Arr(data.authors).map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>

          {/* 书籍描述 */}
          <div className='book-desc'>{data.desc}</div>

          <button
            className='badge-button'
            data-count={book?.count ? book.count : 0}
            onClick={() => addToCart(data)}>
            添加到购物车
          </button>

          {/* 书籍其他信息 */}
          <div className='book-details'>
            <div className='detail-key'>语言</div>
            <div className='detail-value'>{data.language}</div>
            <div className='detail-key'>页数</div>
            <div className='detail-value'>{data.pages}</div>
            <div className='detail-key'>著作人</div>
            <div className='detail-value'>{data.publisher}</div>
            <div className='detail-key'>评分</div>
            <div className='detail-value'>{data.rating}</div>
            <div className='detail-key'>年份</div>
            <div className='detail-value'>{data.year}</div>
          </div>
        </div>
      </div>
    </>
  )
}
