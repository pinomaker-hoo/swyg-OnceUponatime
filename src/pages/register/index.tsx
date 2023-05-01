// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect } from 'react'

// ** Other View Imports
import RegisterPageView from 'views/register'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateName } from 'services'
import { getUserUid, updateUser } from 'store/auth'

// ** Other Imports
import useInput from 'hooks/useInput'

const RegisterPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [user, setUser, setData] = useInput({
    uid: '',
    name: '',
  })

  const uid = useSelector(getUserUid)

  const modifyContent = async () => {
    if (user.name === '') {
      alert('데이터를 입력해주세요.')

      return
    }

    await updateName(user)
    dispatch(updateUser(user))

    router.push('/intro')
  }

  useEffect(() => {
    if (uid) {
      setData({ ...user, uid })
    }
  }, [uid])

  return (
    <RegisterPageView
      user={user}
      setUser={setUser}
      modifyContent={modifyContent}
    />
  )
}

export default RegisterPage
