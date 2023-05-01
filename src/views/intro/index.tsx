// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Button, Grid, Typography } from '@mui/material'

interface Props {
  name: string
}

const IntroPageView = ({ name }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Grid container spacing={3} sx={{ mt: 20 }}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: 24 }}>
              안녕하세요 {name}님
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: 20 }}>
              Once Upon a time은 {name} 의<br /> 추억을 저장해주는 서비스
              입니다.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: 20 }}>
              버리기 아까운 오래된 편지, 사진 등<br /> 이미지로 남겨 나의 폴더에
              <br />
              저장해보세요!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
              mt: 12,
              position: 'absolute',
              transform: 'translate(0,150%)',
            }}
          >
            <img src="/logo.png" style={{ opacity: 0.3 }} />
          </Grid>
          <Grid item xs={12} sx={{ mt: 35 }}>
            <Link href="/folder/list">
              <Button
                variant="contained"
                sx={{ backgroundColor: '#272A33', p: 1.5 }}
                fullWidth
                size="large"
              >
                이야기를 들려주세요!
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default IntroPageView
