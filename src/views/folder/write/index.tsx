// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useRef } from 'react'

// ** Mui Imports
import { Grid, Typography, Button, Paper, TextField, Chip } from '@mui/material'

// ** Type Imports
import { SaveAlbumType } from 'types'
import BasicModal from 'components/modal/basicModal'

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  regContent: () => void
  previewUrl: string | null
  album: SaveAlbumType
  setAlbum: any
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleChangeTag: (e: React.ChangeEvent<HTMLInputElement>) => void
  tag: string
  handleRemoveTag: (index: number) => void
  open: boolean
  handleClose: () => void
}

const CardWritePageView = ({
  handleChange,
  regContent,
  previewUrl,
  album,
  setAlbum,
  handleOnKeyPress,
  handleChangeTag,
  tag,
  handleRemoveTag,
  open,
  handleClose,
}: Props) => {
  const ref = useRef<any>()

  const onClickImg = () => {
    ref.current?.click()
  }

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <Link href="/folder/0/list">
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={10} sx={{ textAlign: 'right' }}>
            <Button sx={{ p: 0 }} onClick={regContent}>
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
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                    src="/plus.png"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
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
              sx={{ width: '90%' }}
              label="제목"
              name="title"
              value={album.title}
              onChange={setAlbum}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid container>
              {album.tag.map((item: string, index: number) => (
                <Grid
                  item
                  xs={4}
                  sx={{ textAlign: 'center', mt: 1 }}
                  key={index}
                >
                  <Chip
                    label={item}
                    sx={{ color: '#999999', backgroundColor: '#DDDDDD' }}
                    onDelete={() => handleRemoveTag(index)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
            <TextField
              variant="standard"
              sx={{ width: '90%' }}
              label="태그"
              value={tag}
              onChange={handleChangeTag}
              onKeyDown={handleOnKeyPress}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <TextField
              variant="standard"
              sx={{ width: '90%' }}
              label="내용"
              name="text"
              value={album.text}
              onChange={setAlbum}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
      <BasicModal
        state={open}
        handleClose={handleClose}
        title="이미지를 선택해주세요."
      />
    </Grid>
  )
}

export default CardWritePageView
