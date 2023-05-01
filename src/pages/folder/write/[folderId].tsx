// ** React Imports
import useInput from 'hooks/useInput'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { saveAlbum } from 'services'

// ** Api Imports
import { imgUpload } from 'services/upload'
import { getUserUid } from 'store/auth'

// ** Other Page View
import CardWritePageView from 'views/folder/write'

const CardWritePage = () => {
  const router = useRouter()

  const uid = useSelector(getUserUid)

  const [image, setImage] = useState<any>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [tag, setTag] = useState<string>('')
  const [album, setAlbum, setData] = useInput({
    folderId: '',
    imgUrl: '',
    tag: [],
    text: '',
    title: '',
    uid: '',
  })

  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0])
    }

    const selectedFile = e.target.files ? e.target.files[0] : null

    if (selectedFile) {
      setImage(selectedFile)

      const reader = new FileReader()
      reader.onload = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)

      return
    }

    setImage(selectedFile)
    setPreviewUrl(null)
  }

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const tag = [...album.tag, e.target.value]
      setData((cur: any) => ({ ...cur, tag }))

      setTag('')
    }
  }

  const regContent = async () => {
    try {
      const imgUrl = await imgUpload(image)
      await saveAlbum({
        ...album,
        imgUrl,
        folderId: router.query.folderId,
        uid,
      })
    } catch (err) {
      alert('에러가 발생하였습니다.')
    }
  }

  return (
    <CardWritePageView
      handleChange={handleChange}
      regContent={regContent}
      previewUrl={previewUrl}
      album={album}
      setAlbum={setAlbum}
      handleOnKeyPress={handleOnKeyPress}
      handleChangeTag={handleChangeTag}
      tag={tag}
    />
  )
}

export default CardWritePage
