// ** React Imports
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// ** Redux Imports
import { getFolderList } from 'services'
import { getUserUid } from 'store/auth'

// ** Type Imports
import { FolderType } from 'types'

// ** Other View Imports
import FolderPageView from 'views/folder'

const FolderPage = () => {
  const [folderList, setFolderList] = useState<FolderType[]>([])
  const [reRenderSwitch, setReRenderSwitch] = useState<boolean>(false)

  const handleRefetch = () => setReRenderSwitch(true)

  const uid = useSelector(getUserUid)

  useEffect(() => {
    if (reRenderSwitch) {
      setReRenderSwitch(false)
    }
    getFolderList('AtndqUfgLIW5C6xjBA7npEnA0472').then((res) => {
      setFolderList(res)
    })
  }, [reRenderSwitch])

  return <FolderPageView data={folderList} />
}

export default FolderPage
