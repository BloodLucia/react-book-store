import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import { AppHeader } from '../components/AppHeader'
import { SideMenu } from '../components/SideMenu'
import { useEffect } from 'react'

const { Content } = Layout

export const RootPage = () => {
  // useNavigate 是 react router 提供的钩子函数，主要用于做路由跳转
  const nav = useNavigate()

  // 页面初次加载时路由重定向到书籍页面
  // 空数组表示在页面初次加载时触发该回调函数
  useEffect(() => {
    nav('/books')
  }, [])

  return (
    <Layout style={{ height: '100%' }}>
      {/* 网页头部 */}
      <AppHeader />

      <div className='w main-container'>
        {/* 网页侧边栏 */}
        <SideMenu />

        {/* 网页内容 */}
        <Content className='page-container'>
          <Outlet />
        </Content>
      </div>
    </Layout>
  )
}
