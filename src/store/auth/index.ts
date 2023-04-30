// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

interface AuthType {
  uid: string
  name: string
}

const initialState: AuthType = {
  uid: '',
  name: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state = {
        ...state,
        ...payload,
      }
    },
    userLogout: (state) => {
      state = { ...initialState }
    },
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const { updateUser, userLogout } = authSlice.actions
