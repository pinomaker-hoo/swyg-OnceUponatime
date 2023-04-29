// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Button, Grid, Typography } from '@mui/material'

// ** Other View Imports
import Folder from 'components/folder'
import InsertModal from 'components/modal/insertModal'
import AddFolder from 'components/addFolder'
import DeleteFolder from 'components/deleteFolder'

// ** Type Imports
import { FolderType } from 'types'
import Link from 'next/link'

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
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 10 }}>
        <Grid container>
          <Grid item xs={2}>
            <img src="/back.png" />
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
            <Grid item xs={6} key={id}>
              <Link href={`/folder/${id}/list`}>
                {deleteFolder ? (
                  <DeleteFolder title={title} count={count} />
                ) : (
                  <Folder title={title} count={count} />
                )}
              </Link>
            </Grid>
          ))}
          <Grid item xs={6}>
            <Button onClick={handleOpen} sx={{ p: 0 }}>
              <AddFolder />
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 30 }}>
          <img src="/home.png" />
        </Grid>
      </Grid>
      <Grid item xs={1} />
      {open && <InsertModal state={open} handleClose={handleClose} />}
    </Grid>
  )
}

export default FolderPageView
