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

interface FolderDetailListPageView {
  data: FolderType[]
  datailData: any[]
  tab: string
  folderId: string
  handleChange: (event: React.SyntheticEvent, val: string) => void
}

const FolderDetailListPageView = ({
  data,
  datailData,
  tab,
  handleChange,
  folderId,
}: FolderDetailListPageView) => {
  const [delState, setDetState] = useState<boolean>(false)

  const handleDelete = () => (delState ? setDetState(false) : setDetState(true))

  return (
    <Grid container>
      <Grid item xs={0.5} />
      <Grid item xs={11} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <img src="/back.png" />
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            <Typography>앨범</Typography>
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
              {data.map(({ title, id }: FolderType) => (
                <Tab label={title} value={String(id)} key={id} />
              ))}
            </Tabs>
          </Grid>
          {datailData.map(({ id, img }: any) => (
            <Grid
              item
              xs={6}
              sx={{ textAlign: 'center', mt: 2, px: 1 }}
              key={id}
            >
              {delState ? (
                <DeleteCardComponent id={id} img={img} />
              ) : (
                <Link
                  href={`/folder/${folderId}/${id}`}
                  underline="none"
                  color="ActiveBorder"
                >
                  <CardComponent id={id} img={img} />
                </Link>
              )}
            </Grid>
          ))}
          <Grid item xs={6} sx={{ textAlign: 'center', mt: 2, px: 1, mb: 3 }}>
            <Link href="/folder/write">
              <AddCardComponent />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0.5} />
    </Grid>
  )
}

export default FolderDetailListPageView
