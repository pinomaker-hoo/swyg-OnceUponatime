// ** Mui Imports
import { Card, Grid } from '@mui/material'

const AddCardComponent = () => {
  return (
    <Card sx={{ textAlign: 'center', width: 150, height: 150 }}>
      <Grid container>
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
      </Grid>
    </Card>
  )
}

export default AddCardComponent
