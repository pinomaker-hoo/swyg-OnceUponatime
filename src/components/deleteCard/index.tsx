// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Card, Grid, Button } from '@mui/material'

// ** Other View Imports
import SelectModal from 'components/modal/selectModal'

interface CardProps {
  id: number
  img: string
}

const DeleteCardComponent = ({ id, img }: CardProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
            <Button onClick={handleOpen} sx={{ p: 0 }}>
              <img src="/delete.png" />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <img src={img} />
          </Grid>

          {open && (
            <SelectModal
              title="사진을 삭제하시겠습니까?"
              state={open}
              handleClose={handleClose}
              event={() => null}
            />
          )}
        </Card>
      </Grid>
    </Grid>
  )
}

export default DeleteCardComponent
