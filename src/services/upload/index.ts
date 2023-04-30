// ** Firebase Imports
import { storage } from 'config/firebaseConfig'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const upload = {
  imgUpload: async (image: any) => {
    const imageRef = ref(storage, `images/${image.name}`)
    const snapshot = await uploadBytes(imageRef, image)
    return await getDownloadURL(snapshot.ref)
  },
}

export const { imgUpload } = upload
