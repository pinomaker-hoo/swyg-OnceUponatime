// ** React Imports
import { useEffect, useState } from 'react'

// ** Other View Imports
import IntroPageView from 'views/intro'

// ** Redux Imports
import { useSelector } from 'react-redux'
import { getUserName } from 'store/auth'

const IntroPage = () => {
  const [name, setName] = useState<string>('')

  const userName = useSelector(getUserName)

  useEffect(() => {
    setName(userName)
  }, [userName])

  return <IntroPageView name={name} />
}

export default IntroPage
