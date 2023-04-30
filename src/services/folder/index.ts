// ** Firebase Imports
import { db } from 'config/firebaseConfig'
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from 'firebase/firestore'

const folderApi = {
  saveFolder: async (uid: string, name: string) => {
    await setDoc(doc(collection(db, 'folder')), {
      name,
      uid,
    })
  },
  getFolderList: async (uid: string) => {
    const querySnapshot = await getDocs(
      query(collection(db, 'folder'), where('uid', '==', uid))
    )
    return querySnapshot.docs.map((item) => ({
      name: String(item.data().name),
      uid: String(item.data().uid),
      id: item.id,
      count: 0,
    }))
  },
  deleteFolder: async (id: string) => {
    await deleteDoc(doc(db, 'folder', id))
  },
}

export const { saveFolder, getFolderList, deleteFolder } = folderApi
