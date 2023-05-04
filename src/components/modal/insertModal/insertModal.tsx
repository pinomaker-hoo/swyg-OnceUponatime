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
import SelectModal from '../selectModal'
import BasicModal from '../basicModal'

interface InsertModalProps {
  state: boolean
  value: string
  open: boolean
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClose: () => void
  event: () => void
  handleAlertClose: () => void
}

const InsertModalView = ({
  state,
  handleClose,
  value,
  setValue,
  event,
  handleAlertClose,
  open,
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
            label="앨범 이름"
          />
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={event}>확인</Button>
        <Button onClick={handleClose}>취소</Button>
      </DialogActions>
      <BasicModal
        title="앨범 이름을 입력해주세요."
        handleClose={handleAlertClose}
        state={open}
      />
    </Dialog>
  )
}

export default InsertModalView
