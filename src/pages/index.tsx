// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

const Home = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 30 }}>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ textAlign: 'center' }}>
        <img src="/logo.png" />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 30 }}>
        <Link href="/register">
          <Card sx={{ p: 2 }}>
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
        </Link>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default Home
