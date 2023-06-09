// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

interface AuthType {
  user: { uid: string; name: string }
}

const initialState: AuthType = {
  user: { uid: '', name: '' },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = {
        ...state.user,
        ...payload,
      }
    },
    userLogout: (state) => {
      state = { ...initialState }
    },
  },
  extraReducers: (builder) => {},
})

export const getUserUid = (state: RootState) => state.auth.user.uid
export const getUserName = (state: RootState) => state.auth.user.name

export default authSlice.reducer

export const { updateUser, userLogout } = authSlice.actions
