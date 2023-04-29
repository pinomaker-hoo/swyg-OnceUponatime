// ** Mui Imports
import { Grid, Typography, Button, Paper, TextField } from '@mui/material'

const CardWritePageView = () => {
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 10 }}>
        <Grid container>
          <Grid item xs={2}>
            <img src="/back.png" />
          </Grid>
          <Grid item xs={10} sx={{ textAlign: 'right' }}>
            <Button sx={{ p: 0 }}>
              <Typography>완료</Typography>
            </Button>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Button sx={{ p: 0 }}>
              <Paper
                sx={{
                  boxShadow: 'none',
                  border: 1,
                  width: 250,
                  height: 250,
                  textAlign: 'center',
                }}
              >
                <img src="/plus.png" />
              </Paper>
            </Button>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <TextField variant="standard" sx={{ width: '80%' }} label="제목" />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
            <TextField variant="standard" sx={{ width: '80%' }} label="태그" />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <TextField variant="standard" sx={{ width: '80%' }} label="내용" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default CardWritePageView
