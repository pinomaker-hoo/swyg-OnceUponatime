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

  const [open, setOpen] = useState<boolean>(false)
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

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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

  const modifyContent = async () => {
    try {
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

  const handleOnKeyPress = (e: any) => {
    if (e.key === 'Enter' || e.keyCode === 32) {
      if (album.tag.length > 5) {
        handleOpen()
        setTag('')

        return
      }
      const tag = [...album.tag, e.target.value]
      setData((cur: any) => ({ ...cur, tag }))

      setTag('')
    }
  }

  const handleRemoveTag = (index: number) => {
    const tag = album.tag.filter((v: string, i: number) => i !== index)
    setData((cur: any) => ({ ...cur, tag }))
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
      handleOnKeyPress={handleOnKeyPress}
      handleChangeTag={handleChangeTag}
      tag={tag}
      handleRemoveTag={handleRemoveTag}
      open={open}
      handleClose={handleClose}
    />
  )
}

export default CardEditPage
