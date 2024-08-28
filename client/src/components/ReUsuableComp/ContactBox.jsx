import { Avatar } from '@mui/material'

function ContactBox({ profilePhoto }) {
  return (
    <div
      id="contact"
      className="py-[2rem] w-full pl-[3rem] pr-[1rem] text-[white] flex gap-[1rem] items-center hover:bg-[#272836]"
    >
      <div id="avatart">
        <Avatar src={profilePhoto} sx={{ width: '5rem', height: '5rem' }} />
      </div>
      <div id="details" className="flex flex-col w-full gap-[1rem]">
        <div
          id="name-time"
          className="font-[600] text-[1.8rem] flex justify-between text-[#E6E7E9] items-center"
        >
          <p className="" id="name">
            Kamlesh Kumar
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
