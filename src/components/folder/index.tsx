// ** Mui Import
import { Grid, Typography } from '@mui/material'

interface FolderProps {
  title: string
  count: number
}

const Folder = ({ title, count }: FolderProps) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <img src="/folder.png" />
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
          <Typography variant="h6" sx={{ fontSize: 16 }}>
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
          <Typography variant="body1" sx={{ fontSize: 14 }}>
            {count}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Folder
