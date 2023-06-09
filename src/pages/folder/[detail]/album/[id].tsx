// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, useState } from 'react'

// ** Api Imports
import { getAlbum } from 'services'

// ** Other View Imports
import DetailPageView from 'views/folder/detailCard'

const DetailPage = () => {
  const router = useRouter()
  const [copyLink, setCopyLink] = useState<string>('')
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

      setCopyLink(`http://localhost:3002/guest/${String(router.query.id)}`)
    }
  }, [router.query.id])

  return (
    <DetailPageView
      title={album.title}
      img={album.imgUrl}
      text={album.text}
      tag={album.tag}
      id={String(router.query.id)}
      tabId={String(router.query.detail)}
      copyLink={copyLink}
    />
  )
}

export default DetailPage
