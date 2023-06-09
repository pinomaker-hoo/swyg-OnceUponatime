// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useState, useEffect } from 'react'

// ** Api Imports
import { getAlbum } from 'services'

// ** Other View Imports
import GuestDetailPageView from 'views/guest'

const GuestDetailPage = () => {
  const router = useRouter()
  const [album, setAlbum] = useState<any>({
    folderId: '',
    imgUrl: '',
    tag: [],
    text: '',
    title: '',
    uid: '',
  })

  useEffect(() => {
    if (router.query.id) {
      getAlbum(String(router.query.id)).then((res) => {
        setAlbum(res)
      })
    }
  }, [router.query.id])

  return (
    <GuestDetailPageView
      title={album.title}
      img={album.imgUrl}
      text={album.text}
      tag={album.tag}
      tabId={String(router.query.detail)}
    />
  )
}

export default GuestDetailPage
