import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'self',
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = {}
    },
  },
})

export const handleSelf = slice.reducer

export const { setUser, clearUser } = slice.actions

export const getUser = (state) => state.self.user
