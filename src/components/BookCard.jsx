import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Meta } = Card

export const BookCard = ({ book }) => {
  const nav = useNavigate()

  return (
    <Card
      onClick={() => nav(`/books/${book.isbn13}`)}
      className='book-card'
      cover={
        <img
          src={book.image}
          alt={book.title}
        />
      }>
      <Meta
        title={book.title}
        description={<p className='book-price'>{book.price}</p>}
      />
    </Card>
  )
}
