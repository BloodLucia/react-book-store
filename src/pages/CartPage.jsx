import { Space } from 'antd'
import { Button, Table } from 'antd'
import { PageIntro } from '../components/PageIntro'
import { useStore } from '../stores/useStore'
import { mapDataListToDatasources } from '../utils'

export const CartPage = () => {
  const items = useStore((state) => state.items)
  const removeBookById = useStore((state) => state.removeById)

  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      key: 'cover',
      render: (_, record) => {
        return (
          <img
            width={'50%'}
            src={record.cover}
            alt={record.title}
          />
        )
      },
    },
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (_) => {
        const price = items.reduce(
          (acc, item) => acc + item.price.replace('$', '') * item.count,
          0,
        )
        return `\$${price}`
      },
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button
            danger
            onClick={() => removeBookById(record.key)}>
            删除
          </Button>
        </Space>
      ),
    },
  ]
  return (
    <>
      <PageIntro text='My Cart' />
      <Table
        tableLayout='fixed'
        size='large'
        style={{ marginTop: '2rem' }}
        columns={columns}
        pagination={false}
        dataSource={mapDataListToDatasources(items)}
      />
    </>
  )
}
