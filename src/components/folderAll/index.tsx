// ** Mui Import
import { Grid, Typography, Button } from '@mui/material'

interface FolderProps {
  title: string
  count: number
}

const FolderAll = ({ title, count }: FolderProps) => {
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

export default FolderAll
