// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Card, Grid, Button } from '@mui/material'

interface CardProps {
  id: string
  img: string
  handleOpen: (id: string) => void
}

const DeleteCardComponent = ({ id, img, handleOpen }: CardProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ textAlign: 'center', width: '160px', height: '160px' }}>
          <Grid
            item
            xs={12}
            sx={{
              position: 'absolute',
              transform: 'translate(200%, -50%)',
            }}
          >
            <Button onClick={() => handleOpen(id)} sx={{ p: 0 }}>
              <img src="/delete.png" />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <img src={img} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DeleteCardComponent
