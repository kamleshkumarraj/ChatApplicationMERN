import { Outlet } from 'react-router-dom'
import SideMenu from './components/home/SideMenu'
import './style.css'
import ProfileSection from './components/ReUsuableComp/ProfileSection'

function App() {
  return (
    <>
      <div id="app-page" className='flex  bg-[#676C77]'>
        <SideMenu />
        <Outlet />
        <ProfileSection />
      </div>
    </>
  )
}

export default App
