// ** React Imports
import { useState } from 'react'

// ** Other View Imports
import InsertModalView from './insertModal'

interface InsertModalProps {
  state: boolean
  handleClose: () => void
}

const InsertModal = ({ state, handleClose }: InsertModalProps) => {
  const [name, setName] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)

  const regContent = () => {}
  return (
    <InsertModalView
      state={state}
      handleClose={handleClose}
      setValue={handleChange}
      value={name}
      event={regContent}
    />
  )
}

export default InsertModal
