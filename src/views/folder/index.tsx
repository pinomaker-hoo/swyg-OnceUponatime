// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Button, Grid, Typography, Link } from '@mui/material'

// ** Other View Imports
import Folder from 'components/folder'
import InsertModal from 'components/modal/insertModal'
import AddFolder from 'components/addFolder'
import SelectModal from 'components/modal/selectModal'
import FolderAll from 'components/folderAll'

// ** Type Imports
import { FolderType } from 'types'

interface FolderPageViewProps {
  data: FolderType[]
  openDelete: boolean
  count: number
  handleRefetch: () => void
  handleDeleteOpen: (id: string) => void
  handleDeleteClose: () => void
  delContent: () => void
}

const FolderPageView = ({
  data,
  handleRefetch,
  handleDeleteOpen,
  handleDeleteClose,
  openDelete,
  delContent,
  count,
}: FolderPageViewProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [deleteState, setDeleteState] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDelete = () => setDeleteState(true)
  const handleDeleteCancel = () => setDeleteState(false)

  return (
    <Grid container sx={{ maxHeight: '844px' }}>
      <Grid item xs={0.5} />
      <Grid item xs={11} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <Link href="/intro">
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="#666666">
              폴더
            </Typography>
          </Grid>
          <Grid item xs={2}>
            {deleteState ? (
              <Button
                onClick={handleDeleteCancel}
                sx={{ p: 0, color: 'black' }}
              >
                <Typography>완료</Typography>
              </Button>
            ) : (
              <Button onClick={handleDelete} sx={{ p: 0 }}>
                <img src="/check.png" />
              </Button>
            )}
          </Grid>
          <Grid item xs={12} sx={{ mt: 5 }} />
          <Grid item xs={12}>
            <Grid container sx={{ overflow: 'scroll', maxHeight: '744px' }}>
              <Grid item xs={6} sx={{ mt: 1 }}>
                <Link
                  href={`/folder/0/list`}
                  underline="none"
                  color="ActiveBorder"
                  onClick={deleteState ? (e) => e.preventDefault() : () => null}
                >
                  <FolderAll title="전체보기" count={count} />
                </Link>
              </Grid>
              {data.map(({ id, name, count }: FolderType, index: number) => (
                <Grid item xs={6} key={index} sx={{ mt: 1 }}>
                  <Link
                    href={`/folder/${id}/list`}
                    underline="none"
                    color="ActiveBorder"
                    onClick={
                      deleteState ? (e) => e.preventDefault() : () => null
                    }
                  >
                    <Folder
                      title={name}
                      count={count}
                      id={id}
                      event={handleDeleteOpen}
                      deleteState={deleteState}
                    />
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
        </Grid>
      </Grid>
      <Grid item xs={0.5} />
      {open && (
        <InsertModal
          state={open}
          handleClose={handleClose}
          handleRefetch={handleRefetch}
        />
      )}
      {openDelete && (
        <SelectModal
          title="앨범을 삭제하시겠습니까?"
          state={openDelete}
          handleClose={handleDeleteClose}
          event={delContent}
        />
      )}
    </Grid>
  )
}

export default FolderPageView
