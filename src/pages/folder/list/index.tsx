// ** React Imports
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// ** Redux Imports
import { deleteFolder, getAllCount, getFolderList } from 'services'
import { getUserUid } from 'store/auth'

// ** Type Imports
import { FolderType } from 'types'

// ** Other View Imports
import FolderPageView from 'views/folder'

const FolderPage = () => {
  const [folderList, setFolderList] = useState<FolderType[]>([])
  const [reRenderSwitch, setReRenderSwitch] = useState<boolean>(false)
  const [folderId, setFolderId] = useState<string>('')
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  const handleDeleteOpen = (id: string) => {
    setFolderId(id)
    setOpenDelete(true)
  }
  const handleDeleteClose = () => setOpenDelete(false)

  const handleRefetch = () => setReRenderSwitch(true)

  const uid = useSelector(getUserUid)

  const delContent = async () => {
    try {
      await deleteFolder(folderId)
      handleRefetch()
      handleDeleteClose()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (reRenderSwitch) {
      setReRenderSwitch(false)
    }
    getFolderList(uid).then((res) => {
      setFolderList(res)
    })
    getAllCount(uid).then((res) => {
      setCount(res)
    })
  }, [reRenderSwitch])

  return (
    <FolderPageView
      data={folderList}
      handleRefetch={handleRefetch}
      openDelete={openDelete}
      handleDeleteOpen={handleDeleteOpen}
      handleDeleteClose={handleDeleteClose}
      delContent={delContent}
      count={count}
    />
  )
}

export default FolderPage
