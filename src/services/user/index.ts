// ** Firebase Imports
import { db, auth } from 'config/firebaseConfig'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { User } from 'types'

const userApi = {
  saveUser: async (uid: string) => {
    await setDoc(doc(db, 'user', uid), {
      name: '',
    })
  },
  getUser: async (name: string) => {
    const docSnap = await getDoc(doc(db, 'user', name))

    return docSnap.data()
  },
  loginUser: async () => {
    const provider = new GoogleAuthProvider()
    const {
      user: { uid },
    } = await signInWithPopup(auth, provider)

    return uid
  },
  updateName: async ({ name, uid }: User) => {
    try {
      await updateDoc(doc(db, 'user', uid), {
        name,
      })
    } catch (err) {
      console.log(err)
    }
  },
}

export const { getUser, saveUser, loginUser, updateName } = userApi
