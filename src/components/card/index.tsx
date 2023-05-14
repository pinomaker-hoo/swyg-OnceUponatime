// ** Mui Imports
import { Card, Grid } from '@mui/material'

interface CardProps {
  id: number
  img: string
}

const CardComponent = ({ img }: CardProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card
          sx={{
            textAlign: 'center',
            width: '160px',
            height: '160px',
            boxShadow: 'none',
          }}
        >
          <Grid item xs={12}>
            <img
              src={img}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardComponent
