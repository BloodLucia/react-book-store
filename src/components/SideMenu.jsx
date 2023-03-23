import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ReadOutlined,
} from '@ant-design/icons'
import { getMenuItem } from '../utils'

const items = [
  getMenuItem('Books', 'books', <ReadOutlined />),
  getMenuItem('My Cart', 'cart', <ShoppingCartOutlined />),
  getMenuItem('My Orders', 'orders', <ShoppingOutlined />),
  getMenuItem('My Profile', 'profile', <UserOutlined />),
]

// 网页侧边菜单栏组件
export const SideMenu = () => {
  const nav = useNavigate()
  // useLocation 用于获取当前路由的路径
  const { pathname } = useLocation()

  return (
    <Menu
      className='side-menu'
      mode='inline'
      items={items}
      // 侧边菜单默认选中的菜单子项
      defaultSelectedKeys='books'
      selectedKeys={pathname.replace('/', '')}
      // 点击每个子菜单时跳转到对应路由
      onSelect={({ key }) => {
        nav(`/${key}`)
      }}
    />
  )
}
