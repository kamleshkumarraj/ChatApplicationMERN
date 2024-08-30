import { Outlet, useNavigate } from 'react-router-dom'
import SideMenu from './components/home/SideMenu'
import './style.css'
import ProfileSection from './components/ReUsuableComp/ProfileSection'
import { apiCalling } from './api/apiCalling'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './store/slice/auth/Self'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `http://localhost:3000/api/v1/auth/direct-login/${localStorage.getItem('tocken')}`,
    }
    async function apiCall() {
      const data = await dispatch(apiCalling(options))
      if (data.success) {
        navigate('/chat')
        dispatch(setUser(data.user))
        console.log(data)
      } else {
        navigate('/login')
        console.log(data)
      }
    }
    apiCall()
  }, [])
  return (
    <>
      <div id="app-page" className="flex  bg-[#676C77] justify-between">
        <SideMenu />
        <Outlet />
        <ProfileSection />
      </div>
    </>
  )
}

export default App
