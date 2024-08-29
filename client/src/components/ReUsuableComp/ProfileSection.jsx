import profilePhoto from '../../assets/babyPhoto.jpg'
import { Avatar } from '@mui/material'
import { FaLocationPin } from 'react-icons/fa6'
import { BsCalendar2DateFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { IoMdPhonePortrait } from 'react-icons/io'
function ProfileSection() {
  return (
    <div className="w-[52.2rem] min-h-full bg-[#2E2F40]">
      <div
        id="profile"
        className="py-[6rem] gap-[2rem] rounded-full flex flex-col items-center"
      >
        <Avatar src={profilePhoto} sx={{ width: '15rem', height: '15rem' }} />
        <h1 className="text-[3.4rem] font-[500] text-[#ece9e9]">
          Madhuri Dixit
        </h1>
        <p
          className="text-[1.6rem] text-center font-[500] text-[#a0a1ac]"
          id="title"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        id="details"
        className="flex flex-col px-[4rem] justify-center gap-[3rem] font-[600] text-[1.5rem] text-[#f0ebebe2]"
      >
        <div id="location" className="flex gap-[3rem] items-center">
          <FaLocationPin color="white" size={'3rem'} />
          <p id="loc">Sikargadh, Rajsthan</p>
        </div>
        <div id="date" className="flex gap-[3rem] items-center">
          <BsCalendar2DateFill color="white" size={'3rem'} />
          <p id="date">28 Aug. 2024</p>
        </div>
        <div id="mail" className="flex gap-[3rem] items-center line-clamp-1">
          <IoIosMail color="white" size={'3rem'} />
          <p id="mail">kamleshkumar@gmail.com</p>
        </div>
        <div id="phone" className="flex gap-[3rem] items-center">
          <IoMdPhonePortrait color="white" size={'3rem'} />
       <p id="phone">+91 8295131447</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
