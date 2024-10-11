import { configureStore } from '@reduxjs/toolkit'
import { handleSelf } from './slice/auth/Self.js'
import { apiStatusHandler } from './slice/apiResponse.js'
import { allUsersHandler } from './slice/user/allUserHandler.slice.js'

const store = configureStore({
  reducer: {
    self: handleSelf,
    api: apiStatusHandler,
    allUsers : allUsersHandler
  },
})

export default store
