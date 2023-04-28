// ** Mui Imports
import { Button, Grid, TextField, Typography } from '@mui/material'

const RegisterPageView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <img src="/back.png" />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Typography variant="h3" sx={{ fontSize: 24 }}>
              내 이름을
              <br /> 만들어주세요
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="닉네임"
              variant="outlined"
              placeholder="닉네임을 입력해주세요."
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#272A33', p: 1.5 }}
              fullWidth
              size="large"
            >
              다음
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default RegisterPageView
