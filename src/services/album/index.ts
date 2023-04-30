// ** Firebase Imports
import { db } from 'config/firebaseConfig'
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from 'firebase/firestore'

// ** Type Imports
import { SaveAlbumType } from 'types'

const albumApi = {
  saveAlbum: async (album: SaveAlbumType) => {
    await setDoc(doc(collection(db, 'album')), album)
  },
  getAlbumByFolderId: async (id: string) => {
    const querySnapshot = await getDocs(
      query(collection(db, 'album'), where('folderId', '==', id))
    )
    return querySnapshot.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }))
  },
  getAlbumAll: async (uid: string) => {
    const querySnapshot = await getDocs(
      query(collection(db, 'album'), where('uid', '==', uid))
    )
    return querySnapshot.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }))
  },
  deleteAlbum: async (id: string) => {
    await deleteDoc(doc(db, 'album', id))
  },
}

export const { saveAlbum, getAlbumByFolderId, getAlbumAll, deleteAlbum } =
  albumApi
