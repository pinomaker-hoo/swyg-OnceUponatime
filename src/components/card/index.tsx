// ** Mui Imports
import { Card, Grid } from '@mui/material'

interface CardProps {
  id: number
  img: string
}

const CardComponent = ({ id, img }: CardProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ textAlign: 'center', width: '160px', height: '160px' }}>
          <img src={img} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardComponent
