// ** Mui Import
import { Button, Grid, Typography } from '@mui/material'

interface Props {
  title: string
  count: number
  id: string
  event: (id: string) => void
}

const DeleteFolder = ({ title, count, event, id }: Props) => {
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
            left: '90%',
            top: '-400%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Button onClick={() => event(id)} sx={{ p: 0 }}>
            <img src="/delete.png" />
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            position: 'absolute',
            left: '50%',
            top: '-200%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: 19 }}>
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            position: 'absolute',
            left: '50%',
            top: '-70%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: 15 }}>
            {count}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DeleteFolder
