import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import babyPhoto from '../../assets/babyPhoto.jpg'
import { LuMessageCircle } from 'react-icons/lu'
import { MdOutlineGroupAdd } from 'react-icons/md'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { IoNotificationsOutline } from 'react-icons/io5'
import { PiSignOutBold } from 'react-icons/pi'
import { useSelector } from 'react-redux'
import { getUser, setUser } from '../../store/slice/auth/Self'
import { useDispatch } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import { toast } from 'react-toastify'

function SideMenu() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const activeHandler = (status) => {
    return status
      ? 'px-[2.2rem] border-l-[.5rem] border-[#08CE95] bg-[#35364C] py-[1rem]'
      : ''
  }
  const logout = async () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/api/v1/auth/logout',
    }
    const data = await dispatch(apiCalling(options))
    if (data.success) {
      localStorage.setItem('tocken', undefined)
      toast.success(data.message)
      navigate('/login')
      dispatch(setUser({}))
    } else {
      navigate('/chat')
      toast.error(data.message)
    }
  }
  const user = useSelector(getUser)
  return (
    <div
      id="side-menu"
      className="w-[10rem] bg-[#8FBCCB] flex flex-col gap-[4rem] py-[3rem] items-center rounded-b-[.5rem] h-screen"
    >
      <NavLink className={'py-[3rem]'}>
        <Avatar
          src={user?.avatar?.url || babyPhoto}
          sx={{ width: '5.5rem', height: '5.5rem' }}
        />
      </NavLink>
      <NavLink
        className={(status) => activeHandler(status.isActive)}
        to={'/chat'}
      >
        <LuMessageCircle size={'4rem'} color="white" />
      </NavLink>
      <NavLink
        className={(status) => activeHandler(status.isActive)}
        to={'/group'}
      >
        <MdOutlineGroupAdd size={'4rem'} color="white" />
      </NavLink>
      <NavLink
        className={(status) => activeHandler(status.isActive)}
        to={'/mail'}
      >
        <MailOutlineIcon sx={{ fontSize: '4rem', color: 'white' }} />
      </NavLink>
      <NavLink
        className={(status) => activeHandler(status.isActive)}
        to={'/flag'}
      >
        <IoNotificationsOutline size={'4rem'} color="white" />
      </NavLink>
      <Link
        className={(status) => activeHandler(status.isActive)}
        onClick={logout}
      >
        <PiSignOutBold size={'4rem'} color="white" />
      </Link>
    </div>
  )
}

export default SideMenu
