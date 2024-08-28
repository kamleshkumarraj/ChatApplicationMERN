import { configureStore } from '@reduxjs/toolkit'
import { handleSelf } from './slice/auth/Self.js'
import { apiStatusHandler } from './slice/apiResponse.js'

const store = configureStore({
  reducer: {
    self: handleSelf,
    api: apiStatusHandler,
  },
})

export default store
