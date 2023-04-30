// ** Next Imports
import { useRouter } from 'next/router'

// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

// ** Redux Imports
import { getUser, loginUser, saveUser } from 'services'
import { useDispatch } from 'react-redux'
import { getUserUid, updateUser } from 'store/auth'
import { useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const a = useSelector(getUserUid)

  const handleLogin = async () => {
    try {
      const uid = await loginUser()
      const data = await getUser(uid)
      if (data) {
        dispatch(updateUser({ name: data.name, uid }))
        router.push('/intro')

        return
      }

      await saveUser(uid)
      dispatch(updateUser({ uid }))

      router.push('/register')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Grid container spacing={3} sx={{ mt: 30 }}>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ textAlign: 'center' }}>
        <img src="/logo.png" />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 30 }}>
        <Card sx={{ p: 2 }} onClick={handleLogin}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ textAlign: 'center' }}>
              <img src="/google.png" />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" sx={{ fontSize: 15 }}>
                구글계정으로 3초만에 시작하기
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default Home
