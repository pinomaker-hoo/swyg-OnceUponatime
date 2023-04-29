// ** Other View Imports
import FolderPageView from 'views/folder'

const FolderPage = () => {
  return <FolderPageView data={trash} />
}

export default FolderPage

const trash = [
  { id: 0, title: '추억 상자', count: 2 },
  { id: 1, title: '추억 상자', count: 2 },
  { id: 2, title: '추억 상자', count: 2 },
  { id: 3, title: '추억 상자', count: 2 },
  { id: 4, title: '추억 상자', count: 2 },
]
