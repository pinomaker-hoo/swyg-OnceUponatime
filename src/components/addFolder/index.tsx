// ** Mui Import
import { Grid } from '@mui/material'

const AddFolder = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <img src="/folder.png" width="90%" />
      </Grid>
      <Grid container spacing={3} sx={{ position: 'relative' }}>
        <Grid
          item
          xs={12}
          sx={{
            position: 'absolute',
            left: '50%',
            top: '-175%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src="/plus.png" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AddFolder
