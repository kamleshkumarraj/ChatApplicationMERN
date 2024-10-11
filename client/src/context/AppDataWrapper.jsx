import { createContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../store/slice/user/allUserHandler.slice'

export const AppDataProviderContext = createContext()

export const AppDataWrapper = ({ children }) => {
  const firstPersonData = useSelector(getAllUsers)[0]
  const [contactPersonData, setContactPersonData] = useState(firstPersonData)
  return (
    <AppDataProviderContext.Provider
      value={{ contactPersonData, setContactPersonData }}
    >
      {children}
    </AppDataProviderContext.Provider>
  )
}
