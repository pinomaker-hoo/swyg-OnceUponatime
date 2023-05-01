// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, useState } from 'react'

// ** Api Imports
import { getAlbum, imgUpload, updateAlbum } from 'services'

// ** Other Page View
import CardEditPageView from 'views/folder/edit'

// ** Other Imports
import useInput from 'hooks/useInput'

const CardEditPage = () => {
  const router = useRouter()

  const [image, setImage] = useState<any>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [album, setAlbum, setData] = useInput({
    folderId: '',
    imgUrl: '',
    tag: [],
    text: '',
    title: '',
    uid: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0])
    }

    const selectedFile = event.target.files ? event.target.files[0] : null

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

  const modifyContent = async () => {
    try {
      console.log(album)
      if (image) {
        const imgUrl = await imgUpload(image)
        await updateAlbum({ ...album, imgUrl }, String(router.query.id))

        router.push(`/folder/0/album/${String(router.query.id)}`)

        return
      }

      await updateAlbum(album, String(router.query.id))
      router.push(`/folder/0/album/${String(router.query.id)}`)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (router.query.id) {
      getAlbum(String(router.query.id)).then((res) => {
        setData(res)
      })
    }
  }, [router.query.id])

  return (
    <CardEditPageView
      album={album}
      setAlbum={setAlbum}
      handleChange={handleChange}
      previewUrl={previewUrl}
      id={String(router.query.id)}
      modifyContent={modifyContent}
    />
  )
}

export default CardEditPage
