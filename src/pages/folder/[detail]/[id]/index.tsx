// ** Other View Imports
import DetailPageView from 'views/folder/detailCard'

const DetailPage = () => {
  return (
    <DetailPageView
      title="생일선물 받은 저금통"
      img="/bear.png"
      text="123123asdasdasd"
      tag={['꼬질꼬질한', '부드러운', '따뜻한']}
      id={2}
    />
  )
}

export default DetailPage