import { Avatar } from '@mui/material'
import { useContext } from 'react'
import { AppDataProviderContext } from '../../context/AppDataWrapper'
function ContactBox({ image, fullName, userData }) {
  const { setContactPersonData } = useContext(AppDataProviderContext)
  return (
    <div
      id="contact"
      className="py-[1.4rem] w-full hover:cursor-pointer pl-[3rem] pr-[1rem] text-[black] flex gap-[1rem] items-center hover:bg-[#88d3dd64] bg-[#9561d834]"
      style={{
        backdropFilter: `blur(5px)`,
        boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
      }}
      onClick={() => {
        setContactPersonData(userData)
      }}
    >
      <div id="avatart">
        <Avatar src={image} sx={{ width: '5rem', height: '5rem' }} />
      </div>
      <div id="details" className="flex flex-col w-full gap-[1rem]">
        <div
          id="name-time"
          className="font-[600] text-[1.8rem] flex justify-between text-[black] items-center"
        >
          <p className="" id="name">
            {fullName}
          </p>
          <p className="text-[1.5rem]" id="date">
            08:12
          </p>
        </div>
        <div id="title" className="font-[500] text-[1.4rem] text-[#9A9BA3]">
          <p id="title">{`Can't call me only call on whatsapp ...`}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactBox
