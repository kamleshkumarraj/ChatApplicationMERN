import { NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'
import babyPhoto from '../../assets/babyPhoto.jpg'
import { LuMessageCircle } from 'react-icons/lu'
import { MdOutlineGroupAdd } from 'react-icons/md'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { IoFlagOutline } from 'react-icons/io5'
import { TbCloud } from 'react-icons/tb'

function SideMenu() {
  const activeHandler = (status) => {

    console.log(status)
    return status
      ? 'px-[2.2rem] border-l-[.5rem] border-[#08CE95] bg-[#a0a4d826] py-[1rem]'
      : ''
  }
  return (
    <div
      id="side-menu"
      className="w-[10rem] bg-[#272838] flex flex-col gap-[4rem] py-[3rem] items-center rounded-b-[.5rem] h-screen"
    >
      <NavLink className={'py-[3rem]'}>
        <Avatar src={babyPhoto} sx={{ width: '5.5rem', height: '5.5rem'  }} />
      </NavLink>
      <NavLink className={(status) => activeHandler(status.isActive)} to={'/home/chat'}>
        <LuMessageCircle size={'4rem'} color="white" />
      </NavLink>
      <NavLink className={(status) => activeHandler(status.isActive)} to={'/home/group'}>
        <MdOutlineGroupAdd size={'4rem'} color="white" />
      </NavLink>
      <NavLink className={(status) => activeHandler(status.isActive)} to={'/home/mail'}>
        <MailOutlineIcon sx={{ fontSize: '4rem', color: 'white' }} />
      </NavLink>
      <NavLink className={(status) => activeHandler(status.isActive)} to={'/home/flag'}>
        <IoFlagOutline size={'4rem'} color="white" />
      </NavLink>
      <NavLink className={(status) => activeHandler(status.isActive)} to={'/home/storage'}>
        <TbCloud size={'4rem'} color="white" />
      </NavLink>
    </div>
  )
}

export default SideMenu
