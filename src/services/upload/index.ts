// ** Firebase Imports
import { storage } from 'config/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const upload = {
  imgUpload: async (image: any) => {
    const imageRef = ref(storage, `images/${image.name}`)
    const snapshot = await uploadBytes(imageRef, image)
    return await getDownloadURL(snapshot.ref)
  },
  imgDownload: async (imageUrl: string) => {
    const imageRef = ref(storage, imageUrl)

    getDownloadURL(imageRef)
      .then((downloadUrl) => {
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = imageUrl

        link.dispatchEvent(new MouseEvent('click'))
      })
      .catch((error) => {
        console.error(error)
      })
  },
}

export const { imgUpload, imgDownload } = upload
