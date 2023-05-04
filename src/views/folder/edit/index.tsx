// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useRef } from 'react'

// ** Mui Imports
import { Grid, Typography, Button, Paper, TextField, Chip } from '@mui/material'

interface Props {
  album: any
  setAlbum: any
  previewUrl: string | null
  id: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  modifyContent: () => void
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleChangeTag: (e: React.ChangeEvent<HTMLInputElement>) => void
  tag: string
  handleRemoveTag: (index: number) => void
}

const CardEditPageView = ({
  album,
  setAlbum,
  previewUrl,
  handleChange,
  id,
  modifyContent,
  handleOnKeyPress,
  handleChangeTag,
  tag,
  handleRemoveTag,
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
            <Link href={`/folder/0/album/${id}`}>
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={10} sx={{ textAlign: 'right' }}>
            <Button sx={{ p: 0 }} onClick={modifyContent}>
              <Typography>완료</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ ml: 2, mt: 5, textAlign: 'center' }}>
            <Button sx={{ p: 0 }} onClick={onClickImg}>
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
              value={album.title}
              name="title"
              onChange={setAlbum}
            />
          </Grid>
          <Grid item xs={0.5} />
          <Grid item xs={11}>
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
          <Grid item xs={0.5} />
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
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 1 }}>
            <TextField
              variant="standard"
              sx={{ width: '90%' }}
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
