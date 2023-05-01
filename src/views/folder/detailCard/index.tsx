// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Grid, Typography, Button, Chip, Paper } from '@mui/material'

// ** Other Imports
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface DetailPageViewProps {
  title: string
  tag: string[]
  text: string
  img: string
  id: string
  tabId: string
  copyLink: string
}

const DetailPageView = ({
  title,
  tag,
  text,
  img,
  id,
  tabId,
  copyLink,
}: DetailPageViewProps) => {
  const [hide, setHide] = useState<boolean>(true)

  const handleShow = () => setHide(false)
  const handleHide = () => setHide(true)

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <Link href={`/folder/${tabId}/list`}>
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item xs={2}>
            <CopyToClipboard
              text={copyLink}
              onCopy={() => alert('클립보드에 복사되었습니다.')}
            >
              <img src="/share.png" />
            </CopyToClipboard>
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
              <img
                src={img}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid container>
              {tag.map((item: string, index: number) => (
                <Grid item xs={4} key={index}>
                  <Chip
                    label={item}
                    sx={{ color: '#999999', backgroundColor: '#DDDDDD' }}
                  />
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
            </Grid>
          </Grid>
          <Grid item xs={1} />
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
