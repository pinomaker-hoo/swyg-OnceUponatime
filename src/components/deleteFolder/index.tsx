// ** React Imports
import { useState } from 'react'

// ** Mui Import
import { Button, Grid, Typography } from '@mui/material'

// ** Other View Imports
import SelectModal from 'components/modal/selectModal'

interface DeleteFolderProps {
  title: string
  count: number
}

const DeleteFolder = ({ title, count }: DeleteFolderProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
          <Button onClick={handleOpen} sx={{ p: 0 }}>
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
      {open && (
        <SelectModal
          title="앨범을 삭제하시겠습니까?"
          state={open}
          handleClose={handleClose}
          event={() => null}
        />
      )}
    </Grid>
  )
}

export default DeleteFolder
