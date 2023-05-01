// ** Mui Imports
import { Grid, Typography, Button, Paper, TextField } from '@mui/material'
import Link from 'next/link'
import { useRef } from 'react'

interface Props {
  album: any
  setAlbum: any
  previewUrl: string | null
  id: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  modifyContent: () => void
}

const CardEditPageView = ({
  album,
  setAlbum,
  previewUrl,
  handleChange,
  id,
  modifyContent,
}: Props) => {
  const ref = useRef<HTMLInputElement>()

  const onClickImg = () => {
    ref.current?.click()
  }

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <Link href={`/folder/0/album/${id}`}>
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={10} sx={{ textAlign: 'right' }}>
            <Button sx={{ p: 0 }} onClick={modifyContent}>
              <Typography>완료</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ ml: 2, mt: 5 }}>
            <Button sx={{ p: 0 }} onClick={onClickImg}>
              <Paper
                sx={{
                  boxShadow: 'none',
                  border: 1,
                  borderRadius: 2,
                  width: 300,
                  height: 300,
                  textAlign: 'center',
                  backgroundColor: '#f2f2f2',
                }}
              >
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                    }}
                  />
                ) : (
                  <img
                    src={album.imgUrl}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                    }}
                  />
                )}
              </Paper>
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={ref}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
            <TextField
              variant="standard"
              sx={{ width: '80%' }}
              label="제목"
              value={album.title}
              name="title"
              onChange={setAlbum}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
            <TextField
              variant="standard"
              sx={{ width: '80%' }}
              label="태그"
              value={album.tag}
              name="tag"
              onChange={setAlbum}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <TextField
              variant="standard"
              sx={{ width: '80%' }}
              label="내용"
              value={album.text}
              name="text"
              onChange={setAlbum}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default CardEditPageView
