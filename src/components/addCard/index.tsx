// ** Mui Imports
import { Card, Grid } from '@mui/material'

const AddCardComponent = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ textAlign: 'center', width: '160px', height: '160px' }}>
          <Grid container spacing={3} sx={{ position: 'relative' }}>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'Center',
                mt: 7,
              }}
            >
              <img src="/plus.png" />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddCardComponent
