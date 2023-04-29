import { Grid, Typography, Button, Chip } from '@mui/material'
import Link from 'next/link'

interface DetailPageViewProps {
  title: string
  tag: string[]
  text: string
  img: string
  id: number
}

const DetailPageView = ({ title, tag, text, img, id }: DetailPageViewProps) => {
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 10 }}>
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
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <img src={img} />
          </Grid>
          {tag.map((item: string, index: number) => (
            <Grid item xs={4} key={index}>
              <Chip label={item} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography>{text}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Link href={`/folder/edit/${id}`}>
              <img src="/edit.png" />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <img src="/save.png" />
          </Grid>
          <Grid item xs={6}>
            <Typography>수정하기</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>저장</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default DetailPageView
