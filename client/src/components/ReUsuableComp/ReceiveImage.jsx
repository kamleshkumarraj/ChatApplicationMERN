import { Avatar } from "@mui/material"
import profileImage from '../../assets/babyPhoto.jpg'

function ReceiveImage({message}) {
  return (
    <div
    id="receiving-message-box"
    className="flex items-start gap-[2rem] px-[4rem] ml-auto"
  >
    <div id="avatar" className="order-2">
      <Avatar src={profileImage} sx={{ width: '5rem', height: '5rem' }} />
    </div>
    <div id="content" className="flex flex-col gap-[.5rem]">
      <div
        id="message-received"
        className="font-[400]  text-[1.7rem] text-[#fff] max-w-[30rem] text-justify p-[1rem] bg-[#08CE95]  rounded-l-[1rem] "
      >
        <p className="tracking-tighter text-justify leading-[2.4rem]">
          {message}
        </p>
      </div>
      <div
        id="date"
        className="flex gap-[3rem] px-[2rem] text-[1.3rem] font-[500] text-[#c9c3c3be]"
      >
        <p>04 - 09</p>
        <p>04:32 AM</p>
      </div>
    </div>
  </div>
  )
}

export default ReceiveImage
