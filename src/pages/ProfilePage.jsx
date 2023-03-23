import { Input } from 'antd'
import { PageIntro } from '../components/PageIntro'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'

const { TextArea } = Input

export const ProfilePage = () => {
  return (
    <div className='profile-page'>
      <PageIntro text='My Profile' />
      <div className='input-section'>
        <h2 className='title'>Name</h2>
        <div className='input-group'>
          <Input value='Tom' />
          <Input value='Cat' />
        </div>
      </div>
      <div className='input-section'>
        <h2 className='title'>Twitter</h2>
        <div className='input-group'>
          <Input value='@TomCat' />
        </div>
      </div>
      <div className='info-section'>
        <div className='avatar-section'>
          <h2 className='title'>Avatar</h2>
          <div className='avatar-wrap'>
            <img
              width={200}
              src='../../src/assets/images/tomcat.jpg'
              alt=''
            />
            <Upload>
              <Button icon={<UploadOutlined />}>点击上传头像</Button>
            </Upload>
          </div>
        </div>
        <div className='notes-section'>
          <h2>Notes</h2>
          <TextArea
            style={{ width: 500 }}
            rows={12}
            value='我是一只汤姆猫'
          />
        </div>
      </div>
    </div>
  )
}
