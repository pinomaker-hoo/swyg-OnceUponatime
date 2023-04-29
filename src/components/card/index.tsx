// ** Mui Imports
import { Card } from '@mui/material'

interface CardProps {
  id: number
  img: string
}

const CardComponent = ({ id, img }: CardProps) => {
  return (
    <Card sx={{ textAlign: 'center', width: 150, height: 150 }}>
      <img src={img} />
    </Card>
  )
}

export default CardComponent
