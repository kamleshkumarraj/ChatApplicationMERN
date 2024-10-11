import { Avatar } from '@mui/material'
import { FaLocationPin } from 'react-icons/fa6'
import { BsCalendar2DateFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { IoMdPhonePortrait } from 'react-icons/io'
import { useContext } from 'react'
import { AppDataProviderContext } from '../../context/AppDataWrapper'
import loadingPhoto from '../../assets/profile-photo.png'
function ProfileSection() {
  const { contactPersonData } = useContext(AppDataProviderContext)
  const fullname =
    contactPersonData?.firstname +
    ' ' +
    contactPersonData?.middlename +
    ' ' +
    contactPersonData?.lastname
  return (
    <div
      className="w-[45rem] min-h-full bg-[#2E2F40]"
      style={{
        background: `linear-gradient(45deg , #B8DBEF , #C5CAF1)`,
      }}
    >
      <div
        id="profile"
        className="py-[6rem] gap-[2rem] rounded-full flex flex-col items-center"
      >
        <Avatar
          src={contactPersonData ? contactPersonData.avatar.url : loadingPhoto}
          sx={{ width: '15rem', height: '15rem' }}
        />
        <h1 className="text-[2.4rem] text-center font-[500] text-[black]">
          {contactPersonData ? fullname : '.......'}
        </h1>
        <p
          className="text-[1.6rem] text-center font-[500] text-[#424244]"
          id="title"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        id="details"
        className="flex flex-col px-[4rem] justify-center gap-[3rem] font-[600] text-[1.5rem] text-[black]"
      >
        <div id="location" className="flex gap-[3rem] items-center">
          <FaLocationPin color="gray" size={'3rem'} />
          <p id="loc">Sikargadh, Rajsthan</p>
        </div>
        <div id="date" className="flex gap-[3rem] items-center">
          <BsCalendar2DateFill color="gray" size={'3rem'} />
          <p id="date">28 Aug. 2024</p>
        </div>
        <div id="mail" className="flex gap-[3rem] items-center line-clamp-1">
          <IoIosMail color="gray" size={'3rem'} />
          <p id="mail">
            {contactPersonData ? contactPersonData.email : '.......'}
          </p>
        </div>
        <div id="phone" className="flex gap-[3rem] items-center">
          <IoMdPhonePortrait color="gray" size={'3rem'} />
          <p id="phone">+91 8295131447</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
