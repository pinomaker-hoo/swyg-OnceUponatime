// ** Mui Imports
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
} from '@mui/material'

interface SelectModalProps {
  state: boolean
  message: string
  title: string
  handleClose: () => void
  event: () => void
}

const SelectModal = ({
  state,
  handleClose,
  title,
  message,
  event,
}: SelectModalProps) => {
  return (
    <Dialog
      open={state}
      disableEscapeKeyDown
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          handleClose()
        }
      }}
      fullWidth
    >
      <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
      <DialogContentText sx={{ textAlign: 'center' }}>
        {message}
      </DialogContentText>
      <DialogActions>
        <Button onClick={event}>확인</Button>
        <Button onClick={handleClose}>취소</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectModal
