import { Avatar } from '@mui/material'
import profileImage from '../../assets/profile-photo.png'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/slice/auth/Self'

function SendingMessage({ message }) {
  const selfData = useSelector(getUser)
  
  return (
    <div
      id="receiving-message-box"
      className="flex items-start gap-[2rem] px-[4rem] ml-auto "
    >
      <div id="avatar" className="order-2">
        <Avatar
          src={selfData ? selfData?.avatar?.url : profileImage}
          sx={{ width: '5rem', height: '5rem' }}
        />
      </div>
      <div id="content" className="flex flex-col gap-[.5rem]">
        <div
          id="message-received"
          className="font-[600]  text-[1.7rem] text-[#f10382] max-w-[30rem] text-justify p-[1rem] bg-[#3ed53936]  rounded-l-[1rem] "
          style={{
            boxShadow: `rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px`,
            backdropFilter: `blur(2.5px)`,
          }}
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

export default SendingMessage
