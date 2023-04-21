import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAGpRwY6fHsvdMfnysoGpcR7D4wmYEsDHc',
  authDomain: 'onelinestory-4ed84.firebaseapp.com',
  projectId: 'onelinestory-4ed84',
  storageBucket: 'onelinestory-4ed84.appspot.com',
  messagingSenderId: '597003888004',
  appId: '1:597003888004:web:938ee80cc65614b7d329d1',
  measurementId: 'G-L7F2B41D99',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
