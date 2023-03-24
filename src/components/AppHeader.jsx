import { Avatar, Layout } from 'antd'
import avatar from '../assets/images/tomcat.jpg'

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
          <Avatar src={avatar} />
        </div>
      </div>
    </Header>
  )
}
