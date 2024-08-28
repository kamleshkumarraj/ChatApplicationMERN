import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'api',
  initialState: {
    apiStatus: false,
    apiMessage: '',
  },
  reducers: {
    setApiStatus: (state) => {
      state.apiStatus = true
    },
    resetApiStatus: (state) => {
      state.apiStatus = false
    },
  },
})

export const apiStatusHandler = slice.reducer

export const { setApiStatus, resetApiStatus } = slice.actions

export const getApiResponse = (state) => state.api
