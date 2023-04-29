// ** Mui Imports
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
  TextField,
  Grid,
} from '@mui/material'

interface InsertModalProps {
  state: boolean
  value: string
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClose: () => void
  event: () => void
}

const InsertModalView = ({
  state,
  handleClose,
  value,
  setValue,
  event,
}: InsertModalProps) => {
  return (
    <Dialog open={state}>
      <DialogTitle sx={{ textAlign: 'center' }}>새로운 앨범 만들기</DialogTitle>
      <Grid container sx={{ p: 3, my: -1.5 }}>
        <Grid item xs={12}>
          <TextField
            onChange={setValue}
            value={value}
            size="small"
            variant="standard"
          />
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={event}>확인</Button>
        <Button onClick={handleClose}>취소</Button>
      </DialogActions>
    </Dialog>
  )
}

export default InsertModalView
