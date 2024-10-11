import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'allUser',
  initialState: {
    allUsersList: [],
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsersList = [...action.payload]
      return state
    },
  },
})

export const allUsersHandler = slice.reducer
export const { setAllUsers } = slice.actions
export const getAllUsers = (state) => state.allUsers.allUsersList
