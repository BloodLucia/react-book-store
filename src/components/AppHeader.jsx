import { Avatar, Layout } from 'antd'

const { Header } = Layout

export const AppHeader = () => {
  return (
    <Header className='header'>
      <div className='w header-content'>
        <div className='left'>
          <div className='logo' />
          <a
            href='/'
            className='title'>
            Book Store
          </a>
        </div>
        <div className='right'>
          <span className='title'>Hi, Tom</span>
          <Avatar src='../../src/assets/images/tomcat.jpg' />
        </div>
      </div>
    </Header>
  )
}
