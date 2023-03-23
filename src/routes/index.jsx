import { createHashRouter } from 'react-router-dom'
import { BookDetail } from '../pages/BookDetail'
import { BooksPage } from '../pages/BooksPage'
import { CartPage } from '../pages/CartPage'
import { OrdersPage } from '../pages/OrdersPage'
import { ProfilePage } from '../pages/ProfilePage'
import { RootPage } from '../pages/RootPage'

export const routes = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { path: '/books', element: <BooksPage /> },
      { path: '/books/:bookId', element: <BookDetail /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/orders', element: <OrdersPage /> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
])
