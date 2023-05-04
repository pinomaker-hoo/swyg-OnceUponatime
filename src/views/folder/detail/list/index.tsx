// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Button, Grid, Typography, Tabs, Tab, Link } from '@mui/material'

// ** Type Imports
import { FolderType } from 'types'

// ** Other View Imports
import DeleteCardComponent from 'components/deleteCard'
import CardComponent from 'components/card'
import AddCardComponent from 'components/addCard'
import SelectModal from 'components/modal/selectModal'

interface FolderDetailListPageView {
  data: FolderType[]
  datailData: any[]
  tab: string
  folderId: string
  open: boolean
  handleChange: (event: React.SyntheticEvent, val: string) => void
  handleOpen: (id: string) => void
  handleClose: () => void
  delContet: () => void
}

const FolderDetailListPageView = ({
  data,
  datailData,
  tab,
  handleChange,
  folderId,
  open,
  handleOpen,
  handleClose,
  delContet,
}: FolderDetailListPageView) => {
  const [delState, setDetState] = useState<boolean>(false)

  const handleDelete = () => (delState ? setDetState(false) : setDetState(true))

  return (
    <Grid container>
      <Grid item xs={0.5} />
      <Grid item xs={11} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <Link href="/folder/list">
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="#666666">
              앨범
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{ p: 0 }} onClick={handleDelete}>
              <img src="/check.png" />
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Tabs
              value={tab}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="전체보기" value="0" />
              {data.map(({ name, id }: FolderType) => (
                <Tab label={name} value={String(id)} key={id} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ overflow: 'scroll', maxHeight: '710px' }}>
              {datailData.map(({ id, imgUrl }: any, index: number) => (
                <Grid
                  item
                  xs={6}
                  sx={{ textAlign: 'center', mt: 2, px: 1 }}
                  key={index}
                >
                  {delState ? (
                    <DeleteCardComponent
                      id={id}
                      img={imgUrl}
                      handleOpen={handleOpen}
                    />
                  ) : (
                    <Link
                      href={`/folder/${folderId}/album/${id}`}
                      underline="none"
                      color="ActiveBorder"
                    >
                      <CardComponent id={id} img={imgUrl} />
                    </Link>
                  )}
                </Grid>
              ))}
              {tab !== '0' && (
                <Grid
                  item
                  xs={6}
                  sx={{ textAlign: 'center', mt: 2, px: 1, mb: 3 }}
                >
                  <Link href={`/folder/write/${folderId}`}>
                    <AddCardComponent />
                  </Link>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0.5} />
      {open && (
        <SelectModal
          title="사진을 삭제하시겠습니까?"
          state={open}
          handleClose={handleClose}
          event={delContet}
        />
      )}
    </Grid>
  )
}

export default FolderDetailListPageView
