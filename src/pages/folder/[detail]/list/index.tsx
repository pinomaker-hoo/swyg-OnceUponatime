// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, useState } from 'react'

// ** Other View Imports
import FolderDetailListPageView from 'views/folder/detail/list'

const FolderDetailListPage = () => {
  const router = useRouter()

  const [tab, setTab] = useState<string>('0')
  const [detailData, setDatailData] = useState<any[]>([])

  const handleChange = (event: React.SyntheticEvent, val: string) => {
    setTab(val)
  }

  useEffect(() => {
    if (router.query.detail) {
      setTab(String(router.query.detail))
    }
  }, [router.query])

  useEffect(() => {
    if (tab === '0') {
      setDatailData(detailTrash)

      return
    }

    setDatailData(detailTrash.filter((item: any) => String(item.tabId) === tab))
  }, [tab])

  return (
    <FolderDetailListPageView
      data={trash}
      datailData={detailData}
      tab={tab}
      handleChange={handleChange}
    />
  )
}

export default FolderDetailListPage

const trash = [
  { id: 1, title: '추억 상자', count: 2 },
  { id: 2, title: '추억 상자', count: 2 },
  { id: 3, title: '추억 상자', count: 2 },
  { id: 4, title: '추억 상자', count: 2 },
]

const detailTrash = [
  { id: 1, tabId: 0, img: '/test.png' },
  { id: 2, tabId: 0, img: '/test.png' },
  { id: 3, tabId: 0, img: '/test.png' },
  { id: 4, tabId: 1, img: '/test.png' },
  { id: 5, tabId: 1, img: '/test.png' },
  { id: 6, tabId: 1, img: '/test.png' },
  { id: 7, tabId: 1, img: '/test.png' },
  { id: 10, tabId: 3, img: '/test.png' },
  { id: 11, tabId: 4, img: '/test.png' },
  { id: 12, tabId: 3, img: '/test.png' },
]
