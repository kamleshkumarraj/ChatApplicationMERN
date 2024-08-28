import profilePhoto from '../../assets/babyPhoto.jpg'
import { Avatar } from '@mui/material'
import { FaLocationPin } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
function ProfileSection() {
  return (
    <div className="w-full min-h-full bg-[#2E2F40]">
      <div
        id="profile"
        className="py-[6rem] gap-[2rem] rounded-full flex flex-col items-center"
      >
        <Avatar src={profilePhoto} sx={{ width: '15rem', height: '15rem' }} />
        <h1 className="text-[3.4rem] font-[500] text-[#c5c4c4]">
          Madhuri Dixit
        </h1>
        <p
          className="text-[1.6rem] text-center font-[500] text-[#a0a1ac]"
          id="title"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div id="details">
          <div id="location">
            <FaLocationPin />
            <p id="loc">Sikargadh, Rajsthan</p>
          </div>
          <div id="date">
            <BsCalendar2DateFill />
            <p id="date">28 Aug. 2024</p>
          </div>
          <div id="mail">
            <IoIosMail />
            <p id="mail">kamleshkumar.22jics061@jietjodhpur.ac.in</p>
          </div>
          <div id="phone">
          
          </div>
      </div>
    </div>
  )
}

export default ProfileSection
