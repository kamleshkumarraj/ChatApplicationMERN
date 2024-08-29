import { Avatar } from '@mui/material'
import profileImage from '../../assets/profilePhoto.jpg'

function SendingMessage({ message }) {
  return (
    <div
      id="sending-message-box"
      className="flex items-start gap-[2rem] px-[4rem] "
    >
      <div id="avatar">
        <Avatar src={profileImage} sx={{ width: '5rem', height: '5rem' }} />
      </div>
      <div id="content" className="flex flex-col gap-[.5rem]">
        <div
          id="message"
          className="font-[400] text-[1.7rem] text-[#000000b7] max-w-[30rem] text-justify p-[1rem] bg-[#ffffff21]  rounded-r-[1rem] "
          style={{
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
            backdropFilter: `blur(5px)`,
          }}
        >
          <p className="tracking-tighter text-justify leading-[2.4rem]">
            {message}
          </p>
        </div>
        <div
          id="date"
          className="flex gap-[3rem] px-[2rem] text-[1.3rem] font-[500] text-[#161616be]"
        >
          <p>04 - 09</p>
          <p>04:32 AM</p>
        </div>
      </div>
    </div>
  )
}

export default SendingMessage
