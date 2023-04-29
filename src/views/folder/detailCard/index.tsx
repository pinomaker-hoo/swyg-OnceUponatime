import { Grid, Typography, Button, Chip, Paper } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

interface DetailPageViewProps {
  title: string
  tag: string[]
  text: string
  img: string
  id: number
}

const DetailPageView = ({ title, tag, text, img, id }: DetailPageViewProps) => {
  const [hide, setHide] = useState<boolean>(true)

  const handleShow = () => setHide(false)
  const handleHide = () => setHide(true)

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <img src="/back.png" />
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{ p: 0 }}>
              <img src="/check.png" />
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', ml: 2, my: 5 }}>
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
              <img src={img} width="100%" />
            </Paper>
          </Grid>
          {tag.map((item: string, index: number) => (
            <Grid item xs={4} key={index}>
              <Chip label={item} />
            </Grid>
          ))}
          {text.length > 30 ? (
            <>
              <Grid item xs={12} sx={{ mt: 5, my: 2 }}>
                {hide ? (
                  <Typography>{text.slice(0, 30)}...</Typography>
                ) : (
                  <Typography sx={{ width: 30 }}>{text}</Typography>
                )}
              </Grid>
              {hide ? (
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button sx={{ p: 0 }}>
                    <img src="/down.png" onClick={handleShow} />
                  </Button>
                </Grid>
              ) : (
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button sx={{ p: 0 }}>
                    <img src="/top.png" onClick={handleHide} />
                  </Button>
                </Grid>
              )}
            </>
          ) : (
            <Grid item xs={12} sx={{ my: 5 }}>
              <Typography>{text}</Typography>
            </Grid>
          )}

          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Link href={`/folder/edit/${id}`}>
              <img src="/edit.png" />
            </Link>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <img src="/save.png" />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Typography>수정하기</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Typography>저장</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default DetailPageView
