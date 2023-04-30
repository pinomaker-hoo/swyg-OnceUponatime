// ** Other View Imports
import { useSelector } from 'react-redux'
import { getUserName } from 'store/auth'
import IntroPageView from 'views/intro'

const IntroPage = () => {
  const name = useSelector(getUserName)

  return <IntroPageView name={name} />
}

export default IntroPage
