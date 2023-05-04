// ** React Imports
import { useState } from 'react'

// ** Other View Imports
import InsertModalView from './insertModal'
import { useSelector } from 'react-redux'
import { getUserUid } from 'store/auth'
import { saveFolder } from 'services'

interface InsertModalProps {
  state: boolean
  handleClose: () => void
  handleRefetch: () => void
}

const InsertModal = ({
  state,
  handleClose,
  handleRefetch,
}: InsertModalProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  const uid = useSelector(getUserUid)

  const handleOpen = () => setOpen(true)
  const handleAlertClose = () => setOpen(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)

  const regContent = async () => {
    if (name === '') {
      handleOpen()

      return
    }
    await saveFolder(uid, name)
    handleRefetch()
    handleClose()
  }

  return (
    <InsertModalView
      state={state}
      handleClose={handleClose}
      setValue={handleChange}
      value={name}
      event={regContent}
      open={open}
      handleAlertClose={handleAlertClose}
    />
  )
}

export default InsertModal
