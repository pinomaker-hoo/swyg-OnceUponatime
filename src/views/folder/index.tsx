// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Button, Grid, Typography, Link } from '@mui/material'

// ** Other View Imports
import Folder from 'components/folder'
import InsertModal from 'components/modal/insertModal'
import AddFolder from 'components/addFolder'
import DeleteFolder from 'components/deleteFolder'

// ** Type Imports
import { FolderType } from 'types'

interface FolderPageViewProps {
  data: FolderType[]
}

const FolderPageView = ({ data }: FolderPageViewProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [deleteFolder, setDeleteFolder] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDelete = () => setDeleteFolder(true)
  const handleDeleteClose = () => setDeleteFolder(false)

  return (
    <Grid container>
      <Grid item xs={0.5} />
      <Grid item xs={11} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <Link href="/intro">
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            <Typography>폴더</Typography>
          </Grid>
          <Grid item xs={2}>
            {deleteFolder ? (
              <Button onClick={handleDeleteClose} sx={{ p: 0, color: 'black' }}>
                <Typography>완료</Typography>
              </Button>
            ) : (
              <Button onClick={handleDelete} sx={{ p: 0 }}>
                <img src="/check.png" />
              </Button>
            )}
          </Grid>
          <Grid item xs={12} sx={{ mt: 5 }} />
          {data.map(({ id, title, count }: FolderType) => (
            <Grid item xs={6} key={id} sx={{ mt: 1 }}>
              <Link
                href={`/folder/${id}/list`}
                underline="none"
                color="ActiveBorder"
              >
                {deleteFolder ? (
                  <DeleteFolder title={title} count={count} />
                ) : (
                  <Folder title={title} count={count} />
                )}
              </Link>
            </Grid>
          ))}
          <Grid item xs={6} sx={{ mt: 1 }}>
            <Button onClick={handleOpen} fullWidth sx={{ p: 0 }}>
              <AddFolder />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0.5} />
      {open && <InsertModal state={open} handleClose={handleClose} />}
    </Grid>
  )
}

export default FolderPageView
