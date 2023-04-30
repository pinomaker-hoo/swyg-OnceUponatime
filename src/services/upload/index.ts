// ** Firebase Imports
import { storage } from 'config/firebaseConfig'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const upload = {
  imgUpload: async (image: any) => {
    const imageRef = ref(storage, `images/${image.name}`)

    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        return url
      })
    })
  },
}

export const { imgUpload } = upload
