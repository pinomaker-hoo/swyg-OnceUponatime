// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, Fragment, ReactNode } from 'react'

// ** Redux Imports
import { useSelector } from 'react-redux'
import { getUserUid } from 'store/auth'

const ProtectRoute = ({ children }: { children: ReactNode }) => {
  const userUid = useSelector(getUserUid)
  const route = useRouter()

  useEffect(() => {
    if (userUid === '') {
      route.push('/')
    }
  }, [userUid])

  return <Fragment>{children}</Fragment>
}

export default ProtectRoute
