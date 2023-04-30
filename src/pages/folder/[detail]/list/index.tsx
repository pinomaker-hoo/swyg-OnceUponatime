// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFolderList } from 'services'
import { deleteAlbum, getAlbumAll, getAlbumByFolderId } from 'services/album'
import { getUserUid } from 'store/auth'
import { FolderType } from 'types'

// ** Other View Imports
import FolderDetailListPageView from 'views/folder/detail/list'

const FolderDetailListPage = () => {
  const router = useRouter()

  const uid = useSelector(getUserUid)

  const [folderList, setFolderList] = useState<FolderType[]>([])
  const [tab, setTab] = useState<string>('0')
  const [detailData, setDatailData] = useState<any[]>([])

  const [open, setOpen] = useState<boolean>(false)
  const [deleteId, setDeleteId] = useState<string>('')

  const handleOpen = (id: string) => {
    setDeleteId(id)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const [reRenderSwitch, setReRenderSwitch] = useState<boolean>(false)

  const handleChange = (event: React.SyntheticEvent, val: string) => {
    setTab(val)
  }

  const handleRefetch = () => setReRenderSwitch(true)

  const delContet = async () => {
    try {
      await deleteAlbum(deleteId)
      handleRefetch()
      handleClose()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (router.query.detail) {
      setTab(String(router.query.detail))
    }
  }, [router.query])

  useEffect(() => {
    if (reRenderSwitch) {
      setReRenderSwitch(false)
    }

    if (tab === '0') {
      getAlbumAll('AtndqUfgLIW5C6xjBA7npEnA0472').then((res) => {
        setDatailData(res)
      })

      return
    }

    getAlbumByFolderId(tab).then((res) => {
      setDatailData(res)
    })
  }, [tab, reRenderSwitch])

  useEffect(() => {
    getFolderList('AtndqUfgLIW5C6xjBA7npEnA0472').then((res) => {
      setFolderList(res)
    })
  }, [])

  return (
    <FolderDetailListPageView
      data={folderList}
      datailData={detailData}
      tab={tab}
      handleChange={handleChange}
      folderId={String(router.query.detail)}
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      delContet={delContet}
    />
  )
}

export default FolderDetailListPage
