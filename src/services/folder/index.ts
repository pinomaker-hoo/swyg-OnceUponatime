// ** Firebase Imports
import { db } from 'config/firebaseConfig'
import { doc, setDoc, collection } from 'firebase/firestore'

const folderApi = {
  saveFolder: async (uid: string, name: string) => {
    await setDoc(doc(collection(db, 'folder')), {
      name,
      uid,
    })
  },
}

export const { saveFolder } = folderApi
